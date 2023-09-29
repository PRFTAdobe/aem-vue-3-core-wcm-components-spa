<script lang="ts" setup>
  import {
    computed,
    h,
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

  interface ChildProperties {
    cqType?: string;
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
    console.log('CqPath: ', cqPath);
    if (message.data && message.data.id === cqPath) {
      if (message.data.operation === 'navigate') {
        activeIndexFromAuthorPanel.value = message.data.index;
      }
    }
  };

  const getItemPath = (itemKey: string) =>
    props.cqPath?.length > 0 ? `${props.cqPath}/${itemKey}` : itemKey;

  const connectComponentWithItem = (
    itemComponent: VNode,
    itemProps: ChildProperties,
    itemKey: string,
  ) => {
    const itemPath = getItemPath(itemKey);

    return h(itemComponent, {
      ...itemProps,
      cqPath: itemPath,
      containerProps: {},
    });
  };

  const childComponents = computed((): VNode[] => {
    const childComponentNodes: VNode[] = [];

    if (
      Object.keys(props.cqItems!).length > 0 &&
      props.cqItemsOrder!.length > 0
    ) {
      props.cqItemsOrder!.forEach((itemKey) => {
        const itemProps = Utils.modelToProps(
          props.cqItems![itemKey],
        ) as ChildProperties;

        if (itemProps && typeof itemProps.cqType !== 'undefined') {
          const itemComponent = componentMapping.get(itemProps.cqType) as VNode;

          if (itemComponent) {
            childComponentNodes.push(
              connectComponentWithItem(itemComponent, itemProps, itemKey),
            );
          }
        }
      });
    }

    return childComponentNodes;
  });

  const className = computed(() =>
    componentClassNames(
      props.baseCssClass,
      props.appliedCssClassNames,
      props.containerProps,
      isInEditor,
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
      previous !== current &&
      props.cqItemsOrder
    ) {
      statefulExpandedItems.value = [props.cqItemsOrder[previous]];
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
          :class="`${props.baseCssClass}__header`"
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
            <span :class="`${props.baseCssClass}__icon`"></span>
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
