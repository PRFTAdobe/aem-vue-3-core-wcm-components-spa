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
    watch,
  } from 'vue';
  import { AuthoringUtils, Model } from '@adobe/aem-spa-page-model-manager';
  import SpaUtils from '@/utils/SpaUtils';

  interface TabsModel extends Model {
    'cq:panelTitle'?: string;
    id?: string;
  }

  const props = defineProps({
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

  const activeIndexFromAuthorPanel = ref(-1);
  const activeIndex = ref(0);
  const messageChannel = ref(SpaUtils.initMessageChannel());

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
      'data-cmp-is': 'tabs',
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

  const handleTabNavClick = (index: number) => {
    if (activeIndex.value !== index) {
      activeIndex.value = index;
    }
  };

  watch(activeIndexFromAuthorPanel, async (current, previous) => {
    if (
      current !== -1 &&
      typeof current !== 'undefined' &&
      current !== previous
    ) {
      activeIndex.value = current;
    }
  });

  const callbackListener = SpaUtils.createCallbackListener(
    props.cqPath,
    activeIndexFromAuthorPanel,
  );

  onMounted(() => {
    SpaUtils.subscribeRequestMessage(messageChannel.value, callbackListener);
  });

  onUnmounted(() => {
    SpaUtils.unsubscribeRequestMessage(messageChannel.value, callbackListener);
  });

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <div :id="props.id" :class="className" v-bind="tabContainerProps">
    <ol
      v-if="!isEmpty"
      :aria-label="props.accessibilityLabel"
      :class="`${props.baseCssClass}__tablist`"
      aria-multiselectable="false"
      role="tablist"
    >
      <li
        v-for="(tab, index) of props.cqItemsOrder"
        :key="`tab-${index}`"
        :class="[
          `${props.baseCssClass}__tab`,
          {
            [`${props.baseCssClass}__tab--active`]: index === activeIndex,
          },
        ]"
        :tabIndex="index === activeIndex ? 0 : -1"
        data-cmp-hook-tabs="tab"
        role="tab"
        @click="handleTabNavClick(index)"
      >
        {{ props.cqItems![tab]['cq:panelTitle'] }}
      </li>
    </ol>
    <template v-if="!isEmpty && computedIsInEditor">
      <div
        v-for="(childComponent, index) of childComponents"
        :key="`tab-content-${index}`"
        :class="`${props.baseCssClass}__author-tab-content`"
        :style="{ display: activeIndex === index ? 'block' : 'none' }"
      >
        <component :is="childComponent" v-bind="{ isInEditor: false }" />
      </div>
    </template>
    <component :is="childComponents[activeIndex]" v-else-if="!isEmpty" />
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

  .cmp-tabs__tab:hover {
    color: #222;
  }
</style>
