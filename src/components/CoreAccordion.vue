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
    VNode,
  } from 'vue';
  import { AuthoringUtils, Model } from '@adobe/aem-spa-page-model-manager';
  import SpaUtils from '@/utils/SpaUtils';

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
    isInEditor: {
      type: Boolean,
      default: undefined,
    },
    singleExpansion: {
      type: Boolean,
      default: undefined,
    },
    ...componentProperties('cmp-accordion'),
  });

  const computedIsInEditor =
    typeof props.isInEditor !== 'undefined'
      ? props.isInEditor
      : inject('isInEditor', AuthoringUtils.isInEditor());
  const componentMapping = inject('componentMapping', new ComponentMapping());

  const accordionContainer = ref(null);
  const messageChannel = SpaUtils.initMessageChannel();

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

  const isEmpty = computed(
    () => !props.cqItemsOrder || props?.cqItemsOrder.length === 0,
  );

  const placeholderProps = computed(() => ({
    cqPath: props.cqPath!,
    placeholderClassNames: ['new', 'section'].join(' '),
  }));

  const accordionContainerProps = computed(() => {
    const accordionContainerProperties: { [key: string]: string } = {
      class: 'aem-container',
      'data-panelcontainer': 'accordion',
    };

    if (computedIsInEditor) {
      accordionContainerProperties['data-cq-data-path'] = props.cqPath!;
    }

    return accordionContainerProperties;
  });

  const getExpandedItems = (): Element[] => {
    let expandedItems: Element[] = [];
    if (accordionContainer.value) {
      const accordionContainerElement =
        accordionContainer.value as HTMLDivElement;
      const expandedElements = accordionContainerElement.querySelectorAll(
        `.${props.baseCssClass}__item[data-cmp-expanded]`,
      );
      expandedItems = Array.from(expandedElements);
    }
    return expandedItems;
  };

  const expandItem = (item: HTMLDivElement) => {
    if (accordionContainer.value) {
      const accordionContainerElement =
        accordionContainer.value as HTMLDivElement;
      const items = accordionContainerElement.querySelectorAll(
        `.${props.baseCssClass}__item`,
      );
      const indexOfItem = Array.from(items).indexOf(item!);
      if (indexOfItem > -1) {
        const buttons = accordionContainerElement.querySelectorAll(
          `.${props.baseCssClass}__button`,
        );
        buttons[indexOfItem].classList.add(
          `${props.baseCssClass}__button--expanded`,
        );
        buttons[indexOfItem].setAttribute('aria-expanded', true.toString());

        const panels = accordionContainerElement.querySelectorAll(
          `.${props.baseCssClass}__panel`,
        );
        panels[indexOfItem].classList.add(
          `${props.baseCssClass}__panel--expanded`,
        );
        panels[indexOfItem].classList.remove(
          `${props.baseCssClass}__panel--hidden`,
        );
        panels[indexOfItem].setAttribute('aria-hidden', false.toString());
      }
    }
  };

  const collapseItem = (item: HTMLDivElement) => {
    if (accordionContainer.value) {
      const accordionContainerElement =
        accordionContainer.value as HTMLDivElement;
      const items = accordionContainerElement.querySelectorAll(
        `.${props.baseCssClass}__item`,
      );
      const indexOfItem = Array.from(items).indexOf(item!);
      if (indexOfItem > -1) {
        const buttons = accordionContainerElement.querySelectorAll(
          `.${props.baseCssClass}__button`,
        );
        buttons[indexOfItem].classList.remove(
          `${props.baseCssClass}__button--expanded`,
        );
        buttons[indexOfItem].removeAttribute('aria-expanded');

        const panels = accordionContainerElement.querySelectorAll(
          `.${props.baseCssClass}__panel`,
        );
        panels[indexOfItem].classList.remove(
          `${props.baseCssClass}__panel--expanded`,
        );
        panels[indexOfItem].classList.add(
          `${props.baseCssClass}__panel--hidden`,
        );
        panels[indexOfItem].setAttribute('aria-hidden', true.toString());
      }
    }
  };

  const focusButton = (index: number) => {
    if (accordionContainer.value) {
      const accordionContainerElement =
        accordionContainer.value as HTMLDivElement;
      const buttons = accordionContainerElement.querySelectorAll(
        `.${props.baseCssClass}__button`,
      );
      (buttons[index] as HTMLButtonElement).focus();
    }
  };

  const handleKeyDownEnd = () => {
    if (accordionContainer.value) {
      const accordionContainerElement =
        accordionContainer.value as HTMLDivElement;
      const buttons = accordionContainerElement.querySelectorAll(
        `.${props.baseCssClass}__button`,
      );
      focusButton(buttons.length - 1);
    }
  };

  const handleKeyDownLeft = (index: number) => {
    if (index > 0) {
      focusButton(index - 1);
    }
  };

  const handleKeyDownRight = (index: number) => {
    if (accordionContainer.value) {
      const accordionContainerElement =
        accordionContainer.value as HTMLDivElement;
      const buttons = accordionContainerElement.querySelectorAll(
        `.${props.baseCssClass}__button`,
      );
      if (index < buttons.length - 1) {
        focusButton(index + 1);
      }
    }
  };

  const refreshItem = (item: HTMLDivElement) => {
    const expanded = item.hasAttribute('data-cmp-expanded');
    if (expanded) {
      expandItem(item);
    } else {
      collapseItem(item);
    }
  };

  const setItemExpanded = (item: HTMLDivElement, expanded: boolean) => {
    if (expanded) {
      item.setAttribute('data-cmp-expanded', '');
    } else {
      item.removeAttribute('data-cmp-expanded');
    }
    refreshItem(item);
  };

  const toggle = (index: number) => {
    if (accordionContainer.value) {
      const accordionContainerElement =
        accordionContainer.value as HTMLDivElement;
      const items = accordionContainerElement.querySelectorAll(
        `.${props.baseCssClass}__item`,
      );
      const item = items[index];
      if (item) {
        if (props.singleExpansion === true) {
          items.forEach((itemInArray) => {
            if (
              itemInArray !== item &&
              itemInArray.hasAttribute('data-cmp-expanded')
            ) {
              setItemExpanded(itemInArray as HTMLDivElement, false);
            }
          });
        }
        setItemExpanded(
          item as HTMLDivElement,
          !item.hasAttribute('data-cmp-expanded'),
        );
      }
    }
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
        toggle(message.data.index);
      }
    }
  };

  onMounted(() => {
    if (props.singleExpansion === true) {
      const expandedItems = getExpandedItems();
      if (expandedItems.length > 1) {
        toggle(expandedItems.length - 1);
      }
    }

    SpaUtils.subscribeRequestMessage(messageChannel, callbackListener);
  });

  onUnmounted(() => {
    SpaUtils.unsubscribeRequestMessage(messageChannel, callbackListener);
  });

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <div
    :id="props.id"
    ref="accordionContainer"
    :class="className"
    v-bind="accordionContainerProps"
  >
    <template v-if="!isEmpty">
      <div
        v-for="(key, index) of props.cqItemsOrder"
        :id="`accordion-${props.cqItems![key]['id']}`"
        :key="`accordion-index-${index}`"
        :class="`${props.baseCssClass}__item`"
        :data-cmp-expanded="
          props.expandedItems.includes(key) ? true : undefined
        "
        data-cmp-hook-accordion="item"
      >
        <component
          :is="props.headingElement"
          :class="`${props.baseCssClass}__heading`"
        >
          <button
            :id="`accordion-${props.cqItems![key]['id']}-button`"
            :aria-controls="`accordion-${props.cqItems![key]['id']}-panel`"
            :aria-expanded="
              props.expandedItems.includes(key) ? 'true' : undefined
            "
            :class="[
              `${props.baseCssClass}__button`,
              {
                [`${props.baseCssClass}__button--expanded`]:
                  props.expandedItems.includes(key),
              },
            ]"
            data-cmp-hook-accordion="button"
            type="button"
            @click="
              () => {
                toggle(index);
                focusButton(index);
              }
            "
            @keydown.left="handleKeyDownLeft(index)"
            @keydown.up="handleKeyDownLeft(index)"
            @keydown.right="handleKeyDownRight(index)"
            @keydown.down="handleKeyDownRight(index)"
            @keydown.home="focusButton(0)"
            @keydown.end="handleKeyDownEnd"
            @keydown.prevent.enter="
              () => {
                toggle(index);
                focusButton(index);
              }
            "
            @keydown.prevent.space="
              () => {
                toggle(index);
                focusButton(index);
              }
            "
          >
            <span :class="`${props.baseCssClass}__title`">{{
              props.cqItems![key]['cq:panelTitle']
            }}</span>
            <span :class="`${props.baseCssClass}__icon`">
              <svg
                fill="var(--accordion-heading-color)"
                height="18"
                viewBox="0 0 24 24"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
              </svg>
            </span>
          </button>
        </component>
        <div
          :id="`accordion-${props.cqItems![key]['id']}-panel`"
          :aria-hidden="props.expandedItems.includes(key) ? undefined : 'true'"
          :aria-labelledby="`accordion-${props.cqItems![key]['id']}-button`"
          :class="[
            `${props.baseCssClass}__panel`,
            {
              [`${props.baseCssClass}__panel--expanded`]:
                props.expandedItems.includes(key),
            },
            {
              [`${props.baseCssClass}__panel--hidden`]:
                !props.expandedItems.includes(key),
            },
          ]"
          data-cmp-hook-accordion="panel"
          role="region"
        >
          <component
            :is="childComponents[cqItemsOrder!.indexOf(key)]"
            v-bind="{ isInEditor: false }"
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
