<script lang="ts" setup>
  import { componentProperties } from 'aem-vue-3-editable-components';
  import { computed, PropType, useAttrs } from 'vue';
  import { getRenderer } from '@/components/ContentFragmentRegistry';
  import DefaultContentFragment from '@/components/DefaultContentFragment.vue';
  import { Model } from '@adobe/aem-spa-page-model-manager';

  interface ContentFragmentElement {
    dataType: string;
    value: string;
    title: string;
    ':type': string;
    multiValue: boolean;
  }

  const props = defineProps({
    cqItems: {
      type: Object as PropType<{
        [key: string]: Model;
      }>,
      default: () => ({}),
    },
    cqItemsOrder: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
    cqPath: {
      type: String,
      default: '',
    },
    // eslint-disable-next-line vue/require-default-prop
    description: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    elements: {
      type: Object as PropType<{ [key: string]: ContentFragmentElement }>,
      default: () => ({}),
    },
    // eslint-disable-next-line vue/require-default-prop
    elementsOrder: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
    isInEditor: {
      type: Boolean,
      default: undefined,
    },
    // eslint-disable-next-line vue/require-default-prop
    model: {
      type: String,
    },
    // eslint-disable-next-line vue/require-default-prop
    title: {
      type: String,
    },
    ...componentProperties('cmp-contentfragment'),
  });

  const attrs = useAttrs();

  const isEmpty = computed(
    () =>
      (props.elementsOrder as string[]).length === 0 &&
      (props.cqItemsOrder as string[]).length === 0,
  );

  const component = computed(() => {
    const registeredComponent = getRenderer(props.model!);
    if (registeredComponent) {
      return registeredComponent;
    }
    return DefaultContentFragment;
  });

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <component :is="component" v-if="!isEmpty" v-bind="{ ...props, ...attrs }" />
</template>
