<script lang="ts" setup>
  import {
    componentClassNames,
    ComponentMapping,
    componentProperties,
    ContainerPlaceholder,
    Utils,
  } from 'aem-vue-3-editable-components';
  import {
    computed,
    inject,
    onMounted,
    onUnmounted,
    PropType,
    ref,
    useAttrs,
    VNode,
    watch,
  } from 'vue';
  import { AuthoringUtils, Model } from '@adobe/aem-spa-page-model-manager';

  declare global {
    interface Window {
      Granite: unknown;
    }
  }

  interface CarouselAccessibilityProperties {
    play: string;
    pause: string;
    next: string;
    previous: string;
    slide: string;
    indicator: string;
    indicators: string;
  }

  interface CarouselModel extends Model {
    'cq:panelTitle'?: string;
    id?: string;
  }

  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    accessibility: {
      type: Object as PropType<CarouselAccessibilityProperties>,
      default: () => ({
        play: 'Play',
        pause: 'Pause',
        next: 'Next',
        previous: 'Previous',
        slide: 'Slide {0} of {1}',
        indicator: 'Slide %{0}',
        indicators: 'Choose a slide to display',
      }),
    },
    accessibilityLabel: {
      type: String,
      default: 'Carousel',
    },
    autopauseDisabled: {
      type: Boolean,
      default: false,
    },
    // eslint-disable-next-line vue/require-default-prop
    cqItems: {
      type: Object as PropType<{
        [key: string]: CarouselModel;
      }>,
    },
    // eslint-disable-next-line vue/require-default-prop
    cqItemsOrder: {
      type: Array as PropType<Array<string>>,
    },
    cqPath: {
      type: String,
      default: '',
    },
    delay: {
      type: Number,
      default: 5000,
    },
    isInEditor: {
      type: Boolean,
      default: undefined,
    },
    ...componentProperties('cmp-carousel'),
  });

  const attrs = useAttrs();
  const computedIsInEditor =
    typeof props.isInEditor !== 'undefined'
      ? props.isInEditor
      : inject('isInEditor', AuthoringUtils.isInEditor());
  const componentMapping = inject('componentMapping', new ComponentMapping());

  let interval = -1;
  const activeIndexFromAuthorPanel = ref(-1);
  const activeIndex = ref(0);
  const messageChannel = ref(null);
  const statefulAutoplay = ref(attrs?.autoplay === true && !computedIsInEditor);

  const isBrowser = (() => {
    try {
      return typeof window !== 'undefined';
    } catch (err) {
      return false;
    }
  })();

  if (
    isBrowser &&
    window.Granite &&
    // @ts-ignore
    window.Granite.author &&
    // @ts-ignore
    window.Granite.author.MessageChannel
  ) {
    // @ts-ignore
    messageChannel.value = new window.Granite.author.MessageChannel(
      'cqauthor',
      window,
    );
  }

  const callbackListener = (
    message: {
      data: {
        id: string;
        index: number;
        operation: string;
      };
    },
    cqPath = props.cqPath,
  ) => {
    if (message.data && message.data.id === cqPath) {
      if (message.data.operation === 'navigate') {
        activeIndexFromAuthorPanel.value = message.data.index;
      }
    }
  };

  const childComponents = computed((): VNode[] =>
    Utils.getChildComponents(
      props.cqPath as string,
      props.cqItems as {
        [key: string]: Model;
      },
      props.cqItemsOrder as string[],
      true,
      () => ({}),
      false,
      componentMapping,
    ),
  );

  const className = computed(() =>
    componentClassNames(
      props.baseCssClass,
      props.appliedCssClassNames,
      props.cssClassNames,
      props.containerProps,
      computedIsInEditor,
      props.aemNoDecoration,
    ),
  );

  const placeholderProps = computed(() => ({
    cqPath: props.cqPath!,
    placeholderClassNames: ['new', 'section'].join(' '),
  }));

  const getIndicatorArialLabel = (index: number) => {
    let ariaLabel = props.accessibility?.indicator || '';
    const replacement = '{0}';
    ariaLabel = ariaLabel.replace(replacement, (index + 1).toString());
    return ariaLabel;
  };

  const getItemAriaLabel = (index: number) => {
    let ariaLabel = props.accessibility?.slide || '';
    const zeroReplacement = '{0}';
    ariaLabel = ariaLabel.replace(zeroReplacement, (index + 1).toString());
    const oneReplacement = '{1}';
    ariaLabel = ariaLabel.replace(
      oneReplacement,
      props.cqItemsOrder!.length.toString(),
    );
    return ariaLabel;
  };

  const nextSlide = () => {
    if (activeIndex.value === props.cqItemsOrder!.length - 1) {
      activeIndex.value = 0;
    } else {
      activeIndex.value += 1;
    }
  };

  const prevSlide = () => {
    if (activeIndex.value === 0) {
      activeIndex.value = props.cqItemsOrder!.length - 1;
    } else {
      activeIndex.value -= 1;
    }
  };

  const autoPlayTick = () => {
    if (!statefulAutoplay.value || props.cqItemsOrder!.length <= 1) {
      return;
    }
    nextSlide();
  };

  const autoPlay = () => {
    interval = window.setInterval(() => {
      autoPlayTick();
    }, props.delay!);
  };

  const clearAutoPlay = () => {
    window.clearInterval(interval);
  };

  const toggleAutoPlay = (toggle: boolean) => {
    statefulAutoplay.value = toggle;
  };

  const handleIndicatorClick = (index: number) => {
    if (activeIndex.value !== index) {
      activeIndex.value = index;
    }
  };

  const handleOnMouseEnter = () => {
    if (!props.autopauseDisabled && statefulAutoplay.value) {
      clearAutoPlay();
    }
  };

  const handleOnMouseLeave = () => {
    if (!props.autopauseDisabled && statefulAutoplay.value) {
      autoPlay();
    }
  };

  const isEmpty = computed(
    () => !props.cqItemsOrder || props?.cqItemsOrder.length === 0,
  );

  watch(activeIndexFromAuthorPanel, async (current, previous) => {
    if (
      current !== -1 &&
      typeof current !== 'undefined' &&
      current !== previous
    ) {
      activeIndex.value = current;
      statefulAutoplay.value = false;
    }
  });

  onMounted(() => {
    autoPlay();
    if (messageChannel.value) {
      // @ts-ignore
      messageChannel.value.subscribeRequestMessage(
        'cmp.panelcontainer',
        callbackListener,
      );
    }
  });

  onUnmounted(() => {
    if (interval >= 0) {
      clearAutoPlay();
    }
    if (messageChannel.value) {
      // @ts-ignore
      messageChannel.value.unsubscribeRequestMessage(
        'cmp.panelcontainer',
        callbackListener,
      );
    }
  });

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <div
    :id="props.id"
    :aria-label="props.accessibilityLabel"
    :class="className"
    aria-roledescription="carousel"
    data-panelcontainer="carousel"
    role="group"
  >
    <div
      v-if="!isEmpty"
      :class="`${props.baseCssClass}__content`"
      @mouseenter="handleOnMouseEnter"
      @mouseleave="handleOnMouseLeave"
    >
      <div :class="`${props.baseCssClass}__items`">
        <div
          v-for="(childComponent, index) of childComponents"
          :key="`item-${index}`"
          :aria-label="getItemAriaLabel(index)"
          :class="[
            `${props.baseCssClass}__item`,
            {
              [`${props.baseCssClass}__item--active`]: index === activeIndex,
            },
          ]"
          data-cmp-hook-carousel="item"
          role="tabpanel"
        >
          <component :is="childComponent" :key="activeIndex" />
        </div>
      </div>
      <div :class="`${props.baseCssClass}__actions`">
        <button
          :aria-label="props.accessibility!.previous"
          :class="`${props.baseCssClass}__action ${props.baseCssClass}__action--previous`"
          type="button"
          @click="prevSlide"
        >
          <span :class="`${props.baseCssClass}__action-icon`">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </span>
          <span :class="`${props.baseCssClass}__action-text`">{{
            props.accessibility.previous
          }}</span>
        </button>
        <button
          :aria-label="props.accessibility!.next"
          :class="`${props.baseCssClass}__action ${props.baseCssClass}__action--next`"
          type="button"
          @click="nextSlide"
        >
          <span :class="`${props.baseCssClass}__action-icon`"
            ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg
          ></span>
          <span :class="`${props.baseCssClass}__action-text`">{{
            props.accessibility.next
          }}</span>
        </button>
        <template v-if="attrs?.autoplay === true">
          <button
            :aria-label="props.accessibility!.pause"
            :class="[
              `${props.baseCssClass}__action`,
              `${props.baseCssClass}__action--pause`,
              {
                [`${props.baseCssClass}__action--disabled`]: !statefulAutoplay,
              },
            ]"
            type="button"
            @click="toggleAutoPlay(false)"
          >
            <span :class="`${props.baseCssClass}__action-icon`"
              ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg
            ></span>
            <span :class="`${props.baseCssClass}__action-text`">{{
              props.accessibility.pause
            }}</span>
          </button>
          <button
            :aria-label="props.accessibility!.play"
            :class="[
              `${props.baseCssClass}__action`,
              `${props.baseCssClass}__action--play`,
              { [`${props.baseCssClass}__action--disabled`]: statefulAutoplay },
            ]"
            type="button"
            @click="toggleAutoPlay(true)"
          >
            <span :class="`${props.baseCssClass}__action-icon`"
              ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z" /></svg
            ></span>
            <span :class="`${props.baseCssClass}__action-text`">{{
              props.accessibility.play
            }}</span>
          </button>
        </template>
      </div>
      <ol
        :aria-label="props.accessibility?.indicators"
        :class="`${props.baseCssClass}__indicators`"
        role="tablist"
      >
        <li
          v-for="(cqItem, index) of props.cqItemsOrder"
          :key="`item-${index}`"
          :aria-label="getIndicatorArialLabel(index)"
          :class="[
            `${props.baseCssClass}__indicator`,
            {
              [`${props.baseCssClass}__indicator--active`]:
                index === activeIndex,
            },
          ]"
          role="tab"
          @click="handleIndicatorClick(index)"
        >
          {{ props.cqItems![cqItem]['cq:panelTitle'] }}
        </li>
      </ol>
    </div>
    <ContainerPlaceholder v-if="computedIsInEditor" v-bind="placeholderProps" />
  </div>
</template>

<style>
  .cmp-carousel__content {
    position: relative;
  }

  .cmp-carousel__items {
    display: grid;
    grid-template-columns: 1fr;
    z-index: 0;
  }

  .cmp-carousel__item {
    display: block;
    grid-column-start: 1;
    grid-row-start: 1;
    opacity: 0;
    transition: opacity 0.3s ease-out;
    z-index: -1;
  }

  .cmp-carousel__item--active {
    display: block;
    opacity: 1;
    z-index: 1;
  }

  .cmp-carousel__action {
    appearance: none;
    background-color: #f5f5f5;
    block-size: 1.875rem;
    border: 0;
    color: inherit;
    cursor: pointer;
    inline-size: 1.875rem;
    line-height: 1.875rem;
    padding-block: 0.375rem;
    padding-inline: 0.375rem;
  }

  .cmp-carousel__indicators {
    align-items: center;
    block-size: 1.875rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin-block: 0;
    margin-inline: 0;
    padding-block: 0;
    padding-inline: 0;
  }

  .cmp-carousel__indicator {
    background-color: rgb(0 0 0 / 50%);
    block-size: 10px;
    border-radius: 50%;
    cursor: pointer;
    flex: 0 1 auto;
    font-size: 0;
    inline-size: 10px;
    margin-block: 0;
    margin-inline: 7px;
    position: relative;
    text-indent: -3000px;
  }

  .cmp-carousel__indicator--active {
    background-clip: content-box;
    background-color: rgb(0 0 0 / 80%);
    block-size: 16px;
    border: 2px solid #222;
    inline-size: 16px;
    padding-block: 2px;
    padding-inline: 2px;
  }

  .cmp-carousel {
    position: relative;
  }

  .cmp-carousel__actions {
    display: flex;
    flex-direction: row;
    inset-block-end: 0;
    inset-inline-end: 0;
    position: absolute;
  }

  .cmp-carousel__action:first-child {
    margin-inline-start: 0;
  }

  .cmp-carousel__action--disabled {
    display: none;
  }

  .cmp-carousel__action--previous {
    order: 1;
  }

  .cmp-carousel__action--next {
    order: 4;
  }

  .cmp-carousel__action--pause {
    order: 2;
  }

  .cmp-carousel__action--play {
    order: 3;
  }

  .cmp-carousel__action-text {
    display: none;
  }

  .cmp-carousel__action:hover {
    background-color: #eee;
  }

  .cmp-carousel__item .cmp-asset {
    max-inline-size: 100%;
  }
</style>
