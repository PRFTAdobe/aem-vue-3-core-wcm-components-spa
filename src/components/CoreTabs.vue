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
    watchEffect,
  } from 'vue';
  import { AuthoringUtils, Model } from '@adobe/aem-spa-page-model-manager';
  import SpaUtils from '@/utils/SpaUtils';

  interface TabsModel extends Model {
    'cq:panelTitle'?: string;
    id?: string;
  }

  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    activeItem: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    accessibilityLabel: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    cqItems: {
      type: Object as PropType<{
        [key: string]: TabsModel;
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
    isInEditor: {
      type: Boolean,
      default: undefined,
    },
    ...componentProperties('cmp-tabs'),
  });

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
  const tabContainer = ref(null);
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

  const tabContainerProps = computed(() => {
    const tabContainerProperties: { [key: string]: string } = {
      class: 'aem-container',
      'data-panelcontainer': 'tabs',
    };

    if (computedIsInEditor) {
      tabContainerProperties['data-cq-data-path'] = props.cqPath!;
    }

    return tabContainerProperties;
  });

  const placeholderProps = computed(() => ({
    cqPath: props.cqPath!,
    placeholderClassNames: ['new', 'section'].join(' '),
  }));

  const navigate = (tabIndex: number) => {
    if (tabContainer.value) {
      const tabContainerElement = tabContainer.value as HTMLDivElement;
      const tabElements = tabContainerElement.querySelectorAll(
        `.${props.baseCssClass}__tab`,
      );
      const tabPanelElements = tabContainerElement.querySelectorAll(
        `.${props.baseCssClass}__tabpanel`,
      );

      if (tabIndex < 0) {
        // eslint-disable-next-line no-param-reassign
        tabIndex = tabElements.length - 1;
      }

      if (tabIndex >= tabElements.length) {
        // eslint-disable-next-line no-param-reassign
        tabIndex = 0;
      }

      if (tabElements.length) {
        tabElements.forEach((tabElement, index) => {
          if (index === tabIndex) {
            tabElement.classList.add(`${props.baseCssClass}__tab--active`);
            tabElement.setAttribute('aria-selected', 'true');
            tabElement.setAttribute('tabindex', '0');
          } else {
            tabElement.classList.remove(`${props.baseCssClass}__tab--active`);
            tabElement.removeAttribute('aria-selected');
            tabElement.setAttribute('tabindex', '-1');
          }
        });
      }

      if (tabPanelElements.length) {
        tabPanelElements.forEach((tabPanelElement, index) => {
          if (index === tabIndex) {
            tabPanelElement.classList.add(
              `${props.baseCssClass}__tabpanel--active`,
            );
            tabPanelElement.removeAttribute('aria-hidden');
            (tabPanelElement as HTMLDivElement).focus();
          } else {
            tabPanelElement.classList.remove(
              `${props.baseCssClass}__tabpanel--active`,
            );
            tabPanelElement.setAttribute('aria-hidden', 'true');
          }
        });
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
        navigate(message.data.index);
      }
    }
  };

  const handleKeyDownEnd = () => {
    if (tabContainer.value) {
      const tabContainerElement = tabContainer.value as HTMLDivElement;
      const tabElements = tabContainerElement.querySelectorAll(
        `.${props.baseCssClass}__tab`,
      );
      navigate(tabElements!.length - 1);
    }
  };

  const handleKeyDownLeft = () => {
    if (tabContainer.value) {
      const tabContainerElement = tabContainer.value as HTMLDivElement;
      const tabElements = tabContainerElement.querySelectorAll(
        `.${props.baseCssClass}__tab`,
      );
      const tabElement = tabContainerElement.querySelector(
        `.${props.baseCssClass}__tab--active`,
      );
      const tabIndex = Array.from(tabElements).indexOf(tabElement!);
      navigate(tabIndex - 1);
    }
  };

  const handleKeyDownRight = () => {
    if (tabContainer.value) {
      const tabContainerElement = tabContainer.value as HTMLDivElement;
      const tabElements = tabContainerElement.querySelectorAll(
        `.${props.baseCssClass}__tab`,
      );
      const tabElement = tabContainerElement.querySelector(
        `.${props.baseCssClass}__tab--active`,
      );
      const tabIndex = Array.from(tabElements).indexOf(tabElement!);
      navigate(tabIndex + 1);
    }
  };

  onMounted(() => {
    SpaUtils.subscribeRequestMessage(messageChannel, callbackListener);
  });

  onUnmounted(() => {
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
    ref="tabContainer"
    :class="className"
    v-bind="tabContainerProps"
    @keydown.left="handleKeyDownLeft"
    @keydown.up="handleKeyDownLeft"
    @keydown.right="handleKeyDownRight"
    @keydown.down="handleKeyDownRight"
    @keydown.home="navigate(0)"
    @keydown.end="handleKeyDownEnd"
  >
    <ol
      v-if="!isEmpty"
      :aria-label="props.accessibilityLabel"
      :class="`${props.baseCssClass}__tablist`"
      aria-multiselectable="false"
      role="tablist"
    >
      <li
        v-for="(tab, index) of props.cqItemsOrder"
        :id="`${props.cqItems![tab].id}-tab`"
        :key="`tab-${index}`"
        :aria-controls="`${props.cqItems![tab].id}-tabpanel`"
        :aria-selected="index === activeIndex ? true : undefined"
        :class="[
          `${props.baseCssClass}__tab`,
          {
            [`${props.baseCssClass}__tab--active`]: index === activeIndex,
          },
        ]"
        :tabIndex="index === activeIndex ? 0 : -1"
        role="tab"
        @click="navigate(index)"
      >
        {{ props.cqItems![tab]['cq:panelTitle'] }}
      </li>
    </ol>
    <template v-if="!isEmpty">
      <div
        v-for="(childComponent, index) of childComponents"
        :id="`${props.cqItems![props.cqItemsOrder![index]].id}-tabpanel`"
        :key="`tab-content-${index}`"
        :aria-hidden="index === activeIndex ? undefined : true"
        :aria-labelledby="`${
          props.cqItems![props.cqItemsOrder![index]].id
        }-tab`"
        :class="[
          `${props.baseCssClass}__tabpanel`,
          {
            [`${props.baseCssClass}__tabpanel--active`]: index === activeIndex,
          },
        ]"
        role="tabpanel"
        tabindex="0"
      >
        <component :is="childComponent" v-bind="{ isInEditor: false }" />
      </div>
    </template>
    <ContainerPlaceholder v-if="computedIsInEditor" v-bind="placeholderProps" />
  </div>
</template>

<style>
  .cmp-tabs__tablist {
    border-block-end: 1px solid #eee;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-inline-start: 0;
  }

  .cmp-tabs__tab {
    box-sizing: border-box;
    color: #7b7b7b;
    cursor: pointer;
    padding-block: 8px;
    padding-inline: 16px;
  }

  .cmp-tabs__tab--active {
    border-block-end: 2px solid #222;
    color: #222;
    margin-block-end: -1px;
  }

  .cmp-tabs__tabpanel {
    display: none;
  }

  .cmp-tabs__tabpanel--active {
    display: block;
  }

  .cmp-tabs__tabpanel:focus {
    outline: 0;
  }

  .cmp-tabs__tab:hover {
    color: #222;
  }
</style>
