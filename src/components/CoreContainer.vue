<script lang="ts" setup>
  import {
    AllowedComponentsContainer,
    componentClassNames,
    componentProperties,
    Container,
    ContainerPlaceholder,
    ResponsiveGrid,
  } from 'aem-vue-3-editable-components';
  import { computed, inject, useAttrs } from 'vue';
  import { AuthoringUtils } from '@adobe/aem-spa-page-model-manager';

  interface AllowedComponent {
    path: string;
    title: string;
  }

  interface AllowedComponents {
    /**
     * Should AllowedComponents list be applied.
     */
    applicable: boolean;
    components: AllowedComponent[];
  }

  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    accessibilityLabel: {
      type: String,
    },
    aemNoDecoration: {
      type: Boolean,
      default: false,
    },
    // eslint-disable-next-line vue/require-default-prop
    backgroundStyle: {
      type: String,
    },
    cqPath: {
      type: String,
      default: '',
    },
    isInEditor: {
      type: Boolean,
      default: undefined,
    },
    layout: {
      type: String,
      default: 'RESPONSIVE_GRID',
      validator: (prop: string) => ['RESPONSIVE_GRID', 'SIMPLE'].includes(prop),
    },
    // eslint-disable-next-line vue/require-default-prop
    roleAttribute: {
      type: String,
    },
    styleSystemElement: {
      type: String,
      default: 'div',
    },
    ...componentProperties('cmp-container'),
  });

  const attrs = useAttrs();
  const computedIsInEditor =
    typeof props.isInEditor !== 'undefined'
      ? props.isInEditor
      : inject('isInEditor', AuthoringUtils.isInEditor());

  const className = computed(() =>
    componentClassNames(
      props.baseCssClass,
      props.appliedCssClassNames,
      props.containerProps,
      computedIsInEditor,
    ),
  );

  const placeholderProps = computed(() => ({
    cqPath: props.cqPath!,
    placeholderClassNames: ['new', 'section'].join(' '),
  }));

  const showAllowedComponentPlaceholderList = computed(
    () =>
      computedIsInEditor &&
      attrs?.allowedComponents &&
      (attrs?.allowedComponents as AllowedComponents)?.applicable,
  );

  defineOptions({
    inheritAttrs: false,
  });
</script>
<template>
  <AllowedComponentsContainer
    v-if="showAllowedComponentPlaceholderList"
    v-bind="{ ...props, ...attrs }"
  />
  <component
    :is="props.styleSystemElement || 'div'"
    v-else
    :id="props.id"
    :aria-label="props.accessibilityLabel"
    :class="className"
    :role="props.roleAttribute"
    :style="props.backgroundStyle"
  >
    <ResponsiveGrid
      v-if="layout === 'RESPONSIVE_GRID'"
      v-bind="{
        ...props,
        ...attrs,
        allowedComponents: { applicable: false, components: [] },
        isInEditor: false,
        title: '',
      }"
    />
    <Container v-else v-bind="{ ...props, ...attrs, isInEditor: false }" />
    <ContainerPlaceholder v-if="isInEditor" v-bind="placeholderProps" />
  </component>
</template>
