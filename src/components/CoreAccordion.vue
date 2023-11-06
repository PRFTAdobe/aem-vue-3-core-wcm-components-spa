<script lang="ts" setup>
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
  import {
    componentClassNames,
    ComponentMapping,
    componentProperties,
    ContainerPlaceholder,
    Utils,
  } from 'aem-vue-3-editable-components';

  declare global {
    interface Window {
      Granite: unknown;
    }
  }

  interface AccordionModel extends Model {
    'cq:panelTitle'?: string;
    id?: string;
  }

  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    cqItems: {
      type: Object as PropType<{
        [key: string]: AccordionModel;
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
    expandedItems: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
    headingElement: {
      type: String,
      default: 'h3',
    },
    ...componentProperties('cmp-accordion'),
  });

  const attrs = useAttrs();
  const isInEditor = inject('isInEditor', AuthoringUtils.isInEditor());
  const componentMapping = inject('componentMapping', new ComponentMapping());

  const isBrowser = (() => {
    try {
      return typeof window !== 'undefined';
    } catch (err) {
      return false;
    }
  })();

  const messageChannel = ref(null);
  const activeIndexFromAuthorPanel = ref(-1);
  const statefulExpandedItems = ref(props.expandedItems);
  const accordion = ref(null);

  const singleExpansion = computed(() => attrs?.singleExpansion === true);

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

  const accordionContainerProps = computed(() => {
    const accordionContainerProperties: { [key: string]: string } = {};

    if (isInEditor) {
      accordionContainerProperties['data-panelcontainer'] = 'accordion';
      accordionContainerProperties['data-cq-data-path'] = props.cqPath || '';
      accordionContainerProperties['data-placeholder-text'] =
        'Please drag Accordion item components here';
    }

    return accordionContainerProperties;
  });

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
      isInEditor,
      props.aemNoDecoration,
    ),
  );

  const focusButton = (index: number) => {
    const button = (accordion.value! as HTMLDivElement).querySelector(
      `button[data-cmp-button-id="${index}"]`,
    );
    if (button) {
      (button as HTMLButtonElement).focus();
    }
  };

  const handleAccordionNavClick = (itemKey: string, event: Event) => {
    const isActive = statefulExpandedItems.value!.indexOf(itemKey) > -1;

    if (singleExpansion.value) {
      statefulExpandedItems.value = isActive ? [] : [itemKey];
    } else if (isActive) {
      const index = statefulExpandedItems.value!.indexOf(itemKey);
      statefulExpandedItems.value!.splice(index, 1);
    } else {
      statefulExpandedItems.value!.push(itemKey);
    }
    (event.target as HTMLButtonElement).focus();
  };

  const handleAccordionNavKeyDown = (
    itemKey: string,
    event: KeyboardEvent,
    index: number,
  ) => {
    const lastIndex =
      (accordion.value! as HTMLDivElement).querySelectorAll('button').length -
      1;

    switch (event.code) {
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        if (index > 0) {
          focusButton(index - 1);
        }
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        if (index < lastIndex) {
          focusButton(index + 1);
        }
        break;
      case 'Home':
        event.preventDefault();
        focusButton(0);
        break;
      case 'End':
        event.preventDefault();
        focusButton(lastIndex);
        break;
      case 'Enter':
      case 'Space':
        event.preventDefault();
        handleAccordionNavClick(itemKey, event);
        focusButton(index);
        break;
      default:
    }
  };

  const isItemExpanded = (key: string) =>
    statefulExpandedItems.value!.indexOf(key) > -1;

  const placeholderProps = computed(() => ({
    cqPath: props.cqPath!,
    placeholderClassNames: ['new', 'section'].join(' '),
  }));

  watch(singleExpansion, async (current, previous) => {
    if (current !== previous) {
      statefulExpandedItems.value = props.expandedItems;
    }
  });

  watch(props.expandedItems, async (current, previous) => {
    if (current !== previous) {
      statefulExpandedItems.value = current;
    }
  });

  watch(activeIndexFromAuthorPanel, async (current, previous) => {
    if (
      current !== -1 &&
      typeof current !== 'undefined' &&
      current !== previous &&
      props.cqItemsOrder
    ) {
      statefulExpandedItems.value = [props.cqItemsOrder[current]];
    }
  });

  onMounted(() => {
    if (messageChannel.value) {
      // @ts-ignore
      messageChannel.value.subscribeRequestMessage(
        'cmp.panelcontainer',
        callbackListener,
      );
    }
  });

  onUnmounted(() => {
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
    ref="accordion"
    :class="className"
    :data-cmp-single-expansion="singleExpansion === true ? true : undefined"
    v-bind="accordionContainerProps"
  >
    <template
      v-if="
        props.cqItemsOrder && props?.cqItemsOrder.length > 0 && props.cqItems
      "
    >
      <div
        v-for="(key, index) of props.cqItemsOrder"
        :id="`accordion-${props.cqItems[key]['id']}`"
        :key="`accordion-index-${index}`"
        :class="`${props.baseCssClass}__item`"
        :data-cmp-expanded="isItemExpanded(key) ? true : undefined"
      >
        <component
          :is="props.headingElement"
          :class="`${props.baseCssClass}__heading`"
        >
          <button
            :id="`accordion-${props.cqItems[key]['id']}-button`"
            :aria-controls="`accordion-${props.cqItems[key]['id']}-panel`"
            :class="[
              `${props.baseCssClass}__button`,
              {
                [`${props.baseCssClass}__button--expanded`]:
                  isItemExpanded(key),
              },
            ]"
            :data-cmp-button-id="index"
            @click="handleAccordionNavClick(key, $event)"
            @keydown="handleAccordionNavKeyDown(key, $event, index)"
          >
            <span :class="`${props.baseCssClass}__title`">
              {{ props.cqItems[key]['cq:panelTitle'] }}
            </span>
            <span :class="`${props.baseCssClass}__icon`"
              ><svg
                fill="var(--accordion-heading-color)"
                height="18"
                viewBox="0 0 24 24"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg
            ></span>
          </button>
        </component>
        <div
          v-if="isInEditor || isItemExpanded(key)"
          :id="`accordion-${props.cqItems[key]['id']}-panel`"
          :aria-labelledby="`accordion-${props.cqItems[key]['id']}-button`"
          :class="`${props.baseCssClass}__panel ${
            isItemExpanded(key)
              ? ' ' + props.baseCssClass + '__panel--expanded'
              : ' ' + props.baseCssClass + '__panel--hidden'
          }`"
          role="region"
        >
          <component
            :is="childComponents[cqItemsOrder!.indexOf(key)]"
            v-if="props.cqItemsOrder"
          />
        </div>
      </div>
    </template>
    <ContainerPlaceholder v-if="isInEditor" v-bind="placeholderProps" />
  </div>
</template>

<style>
  :root {
    --accordion-heading-color: #7b7b7b;
  }

  .cmp-accordion {
    display: block;
    margin-block: 0;
    margin-inline: 0;
    padding-block: 0;
    padding-inline: 0;
  }

  .cmp-accordion__title {
    font-size: inherit;
    font-style: normal;
  }

  .cmp-accordion__heading {
    font: inherit;
  }

  .cmp-accordion__button {
    align-items: center;
    appearance: none;
    background: none;
    border: none;
    border-block-end: 1px solid currentcolor;
    color: var(--accordion-heading-color);
    cursor: pointer;
    display: flex;
    flex-flow: row nowrap;
    font: inherit;
    justify-content: space-between;
    padding-block: 0.5rem;
    padding-inline: 0;
    position: relative;
  }

  .cmp-accordion__button:hover {
    --accordion-heading-color: #333;
  }

  .cmp-accordion__icon {
    margin-block-start: 5px;
    transform: rotate(-90deg);
  }

  .cmp-accordion__button--expanded .cmp-accordion__icon {
    transform: rotate(0deg);
  }
</style>
