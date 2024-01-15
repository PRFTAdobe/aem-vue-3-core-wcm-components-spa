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
    h,
    inject,
    onMounted,
    onUnmounted,
    PropType,
    Ref,
    ref,
    useAttrs,
    VNode,
    watchEffect,
  } from 'vue';
  import { AuthoringUtils, Model } from '@adobe/aem-spa-page-model-manager';
  import SpaUtils from '@/utils/SpaUtils';

  interface CarouselModel extends Model {
    'cq:panelTitle'?: string;
    id?: string;
  }

  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    accessibility: {
      type: Object as PropType<{
        slide: string;
        indicator: string;
      }>,
      default: () => ({
        slide: 'Slide {0} of {1}',
        indicator: 'Slide {0}',
      }),
    },
    accessibilityLabel: {
      type: String,
      default: 'Carousel',
    },
    accessibilityNext: {
      type: String,
      default: 'Next',
    },
    accessibilityPause: {
      type: String,
      default: 'Pause',
    },
    accessibilityPlay: {
      type: String,
      default: 'Play',
    },
    accessibilityPrevious: {
      type: String,
      default: 'Previous',
    },
    accessibilityTablist: {
      type: String,
      default: 'Choose a slide to display',
    },
    // eslint-disable-next-line vue/require-default-prop
    activeItem: {
      type: String,
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
    controlsPrepended: {
      type: Boolean,
      default: false,
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

  const activeIndex = ref(
    props.cqItemsOrder!.indexOf(props.activeItem!) > 0
      ? props.cqItemsOrder!.indexOf(props.activeItem!)
      : 0,
  );

  const carouselContainer = ref(null);
  const interval: Ref<number | ReturnType<typeof setInterval>> = ref(-1);
  const messageChannel = SpaUtils.initMessageChannel();
  const autoplay = ref(attrs?.autoplay === true && !computedIsInEditor);

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

  const carouselContainerProps = computed(() => {
    const carouselContainerProperties: { [key: string]: string | undefined } = {
      'aria-label': props.accessibilityLabel!,
      'aria-live': 'polite',
      'aria-roledescription': 'carousel',
      class: 'aem-container',
      'data-panelcontainer': 'carousel',
      role: 'group',
    };

    if (computedIsInEditor) {
      carouselContainerProperties['data-cq-data-path'] = props.cqPath!;
    }

    return carouselContainerProperties;
  });

  const navigate = (itemIndex: number) => {
    if (carouselContainer.value) {
      const carouselContainerElement =
        carouselContainer.value as HTMLDivElement;
      const carouselItems = carouselContainerElement.querySelectorAll(
        `.${props.baseCssClass}__item`,
      );
      const carouselIndicators = carouselContainerElement.querySelectorAll(
        `.${props.baseCssClass}__indicator`,
      );

      if (itemIndex < 0) {
        // eslint-disable-next-line no-param-reassign
        itemIndex = carouselItems.length - 1;
      }

      if (itemIndex >= carouselItems.length) {
        // eslint-disable-next-line no-param-reassign
        itemIndex = 0;
      }

      if (carouselItems.length) {
        carouselItems.forEach((carouselItem, index) => {
          if (index === itemIndex) {
            carouselItem.classList.add(`${props.baseCssClass}__item--active`);
            carouselItem.removeAttribute('aria-hidden');
          } else {
            carouselItem.classList.remove(
              `${props.baseCssClass}__item--active`,
            );
            carouselItem.setAttribute('aria-hidden', 'true');
          }
        });
      }

      if (carouselIndicators.length) {
        carouselIndicators.forEach((carouselIndicator, index) => {
          if (index === itemIndex) {
            carouselIndicator.classList.add(
              `${props.baseCssClass}__indicator--active`,
            );
            carouselIndicator.setAttribute('aria-selected', 'true');
            carouselIndicator.setAttribute('tabindex', '0');
          } else {
            carouselIndicator.classList.remove(
              `${props.baseCssClass}__indicator--active`,
            );
            carouselIndicator.removeAttribute('aria-selected');
            carouselIndicator.setAttribute('tabindex', '-1');
          }
        });
      }
    }
  };

  const getActiveItem = () => {
    let activeItem = 0;
    if (carouselContainer.value) {
      const carouselContainerElement =
        carouselContainer.value as HTMLDivElement;
      const itemElements = carouselContainerElement.querySelectorAll(
        `.${props.baseCssClass}__item`,
      );
      const activeItemElement = carouselContainerElement.querySelector(
        `.${props.baseCssClass}__item--active`,
      );
      activeItem = Array.from(itemElements).indexOf(activeItemElement!);
    }
    return activeItem;
  };

  const navigateAndFocus = (itemIndex: number) => {
    navigate(itemIndex);
    if (carouselContainer.value) {
      const carouselContainerElement =
        carouselContainer.value as HTMLDivElement;
      const itemElements = carouselContainerElement.querySelectorAll(
        `.${props.baseCssClass}__item`,
      );
      (itemElements[itemIndex] as HTMLDivElement).focus();
    }
  };

  const nextSlide = () => {
    const activeItem = getActiveItem();
    navigate(activeItem + 1);
  };

  const prevSlide = () => {
    const activeItem = getActiveItem();
    navigate(activeItem - 1);
  };

  const autoPlayTick = () => {
    if (!autoplay.value || props.cqItemsOrder!.length <= 1) {
      return;
    }
    const activeItem = getActiveItem();
    navigate(activeItem + 1);
  };

  const autoPlayCarousel = () => {
    interval.value = setInterval(() => {
      autoPlayTick();
    }, props.delay!);
  };

  const clearAutoPlay = () => {
    clearInterval(interval.value);
  };

  const toggleAutoPlay = (toggle: boolean) => {
    autoplay.value = toggle;
  };

  const carouselControls = computed(() => {
    const previousButton = h(
      'button',
      {
        'aria-label': props.accessibilityPrevious,
        class: [
          `${props.baseCssClass}__action`,
          `${props.baseCssClass}__action--previous`,
        ],
        type: 'button',
        onClick: () => {
          prevSlide();
        },
      },
      [
        h('span', { class: `${props.baseCssClass}__action-icon` }, [
          h(
            'svg',
            {
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            h('path', { d: 'M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z' }),
          ),
        ]),
        h('span', { class: `${props.baseCssClass}__action-text` }, [
          props.accessibilityPrevious,
        ]),
      ],
    );
    const nextButton = h(
      'button',
      {
        'aria-label': props.accessibilityNext,
        class: [
          `${props.baseCssClass}__action`,
          `${props.baseCssClass}__action--next`,
        ],
        type: 'button',
        onClick: () => {
          nextSlide();
        },
      },
      [
        h('span', { class: `${props.baseCssClass}__action-icon` }, [
          h(
            'svg',
            {
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            h('path', { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' }),
          ),
        ]),
        h('span', { class: `${props.baseCssClass}__action-text` }, [
          props.accessibilityNext,
        ]),
      ],
    );

    const pauseButton = h(
      'button',
      {
        'aria-label': props.accessibilityPause,
        class: [
          `${props.baseCssClass}__action`,
          `${props.baseCssClass}__action--pause`,
          {
            [`${props.baseCssClass}__action--disabled`]: !autoplay.value,
          },
        ],
        type: 'button',
        onClick: () => {
          toggleAutoPlay(false);
        },
      },
      [
        h('span', { class: `${props.baseCssClass}__action-icon` }, [
          h(
            'svg',
            {
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            [h('path', { d: 'M6 19h4V5H6v14zm8-14v14h4V5h-4z' })],
          ),
        ]),
        h('span', { class: `${props.baseCssClass}__action-text` }, [
          props.accessibilityPause,
        ]),
      ],
    );
    const playButton = h(
      'button',
      {
        'aria-label': props.accessibilityPlay,
        class: [
          `${props.baseCssClass}__action`,
          `${props.baseCssClass}__action--play`,
          {
            [`${props.baseCssClass}__action--disabled`]: autoplay.value,
          },
        ],
        type: 'button',
        onClick: () => {
          toggleAutoPlay(true);
        },
      },
      [
        h('span', { class: `${props.baseCssClass}__action-icon` }, [
          h(
            'svg',
            {
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            [h('path', { d: 'M8 5v14l11-7z' })],
          ),
        ]),
        h('span', { class: `${props.baseCssClass}__action-text` }, [
          props.accessibilityPlay,
        ]),
      ],
    );
    const buttons = [previousButton, nextButton];
    if (attrs?.autoplay === true) {
      buttons.push(pauseButton);
      buttons.push(playButton);
    }
    return h('div', { class: `${props.baseCssClass}__actions` }, buttons);
  });

  const isEmpty = computed(
    () => !props.cqItemsOrder || props?.cqItemsOrder.length === 0,
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

  const handleIndicatorClick = (index: number) => {
    navigate(index);
  };

  const handleOnMouseEnter = () => {
    if (!props.autopauseDisabled && autoplay.value) {
      clearAutoPlay();
    }
  };
  const handleOnMouseLeave = () => {
    if (!props.autopauseDisabled && autoplay.value) {
      autoPlayCarousel();
    }
  };

  const handleKeyDownEnd = () => {
    if (carouselContainer.value) {
      const carouselContainerElement =
        carouselContainer.value as HTMLDivElement;
      const itemElements = carouselContainerElement.querySelectorAll(
        `.${props.baseCssClass}__item`,
      );
      navigateAndFocus(itemElements!.length - 1);
    }
  };

  const handleKeyDownLeft = () => {
    const activeItem = getActiveItem();
    navigateAndFocus(activeItem - 1);
  };

  const handleKeyDownRight = () => {
    const activeItem = getActiveItem();
    navigateAndFocus(activeItem + 1);
  };

  const callbackListener = (
    message: {
      id: number;
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
        navigate(message.data.index);
      }
    }
  };

  onMounted(() => {
    autoPlayCarousel();
    SpaUtils.subscribeRequestMessage(messageChannel, callbackListener);
  });

  onUnmounted(() => {
    if (typeof interval.value === 'number' && interval.value >= 0) {
      clearAutoPlay();
    }
    SpaUtils.unsubscribeRequestMessage(messageChannel, callbackListener);
  });

  watchEffect(
    // eslint-disable-next-line no-return-assign
    () =>
      (activeIndex.value =
        props.cqItemsOrder!.indexOf(props.activeItem!) > 0
          ? props.cqItemsOrder!.indexOf(props.activeItem!)
          : 0),
  );

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <div
    :id="props.id"
    ref="carouselContainer"
    :class="className"
    v-bind="carouselContainerProps"
  >
    <component :is="carouselControls as VNode" v-if="props.controlsPrepended" />
    <div
      v-if="!isEmpty"
      :aria-live="attrs?.autoplay === true ? 'off' : 'polite'"
      :class="`${props.baseCssClass}__content`"
      aria-atomic="false"
      @mouseenter="handleOnMouseEnter"
      @mouseleave="handleOnMouseLeave"
      @keydown.left="handleKeyDownLeft"
      @keydown.up="handleKeyDownLeft"
      @keydown.right="handleKeyDownRight"
      @keydown.down="handleKeyDownRight"
      @keydown.prevent.home="navigateAndFocus(0)"
      @keydown.prevent.end="handleKeyDownEnd"
    >
      <div :class="[{ [`${props.baseCssClass}__items`]: !computedIsInEditor }]">
        <div
          v-for="(childComponent, index) of childComponents"
          :id="`${props.cqItems![props.cqItemsOrder![index]].id}-tabpanel`"
          :key="`item-${index}`"
          :aria-hidden="index === activeIndex ? undefined : true"
          :aria-label="getItemAriaLabel(index)"
          :aria-labelledby="`${
            props.cqItems![props.cqItemsOrder![index]].id
          }-tab`"
          :class="[
            `${props.baseCssClass}__item`,
            {
              [`${props.baseCssClass}__item--active`]: index === activeIndex,
            },
          ]"
          aria-roledescription="slide"
          data-cmp-hook-carousel="item"
          role="tabpanel"
        >
          <component :is="childComponent" v-bind="{ isInEditor: false }" />
        </div>
      </div>
      <component
        :is="carouselControls as VNode"
        v-if="!props.controlsPrepended"
      />
      <ol
        :aria-label="props.accessibilityTablist"
        :class="`${props.baseCssClass}__indicators`"
        role="tablist"
      >
        <li
          v-for="(cqItem, index) of props.cqItemsOrder"
          :id="`${props.cqItems![props.cqItemsOrder![index]].id}-tab`"
          :key="`item-${index}`"
          :aria-controls="`${
            props.cqItems![props.cqItemsOrder![index]].id
          }-tabpanel`"
          :aria-label="getIndicatorArialLabel(index)"
          :aria-selected="index === activeIndex ? true : undefined"
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
    position: relative;
    z-index: 0;
  }

  .cmp-carousel__item {
    display: none;
  }

  .cmp-carousel__items .cmp-carousel__item {
    display: block;
    grid-column-start: 1;
    grid-row-start: 1;
    opacity: 0;
    transition: opacity 0.3s ease-out;
    z-index: -1;
  }

  .cmp-carousel__item--active {
    display: block;
  }

  .cmp-carousel__items .cmp-carousel__item--active {
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
