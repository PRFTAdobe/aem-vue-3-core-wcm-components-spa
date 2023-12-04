<script lang="ts" setup>
  import {
    componentClassNames,
    ComponentMapping,
    componentProperties,
    Utils,
  } from 'aem-vue-3-editable-components';
  import { computed, inject, PropType, VNode } from 'vue';
  import { AuthoringUtils, Model } from '@adobe/aem-spa-page-model-manager';

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

  const computedIsInEditor =
    typeof props.isInEditor !== 'undefined'
      ? props.isInEditor
      : inject('isInEditor', AuthoringUtils.isInEditor());

  const componentMapping = inject('componentMapping', new ComponentMapping());

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

  const childComponents = computed((): VNode[] =>
    Utils.getChildComponents(
      props.cqPath!,
      props.cqItems!,
      props.cqItemsOrder!,
      true,
      () => ({}),
      false,
      componentMapping,
    ),
  );

  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <div :id="props.id" :class="className">
    <h3 :class="`${props.baseCssClass}__title`">{{ props.title }}</h3>
    <p v-if="props.description" :class="`${props.baseCssClass}__description`">
      {{ props.description }}
    </p>
    <div
      v-if="props.elementsOrder?.length"
      :class="`${props.baseCssClass}__elements`"
    >
      <div
        v-for="(element, index) of props.elementsOrder"
        :key="`${props.id}-element-${element}-${index}`"
        :class="`${props.baseCssClass}__element`"
      >
        <div
          :class="[
            `${props.baseCssClass}__elemententry`,
            `${props.baseCssClass}__elemententry--key`,
          ]"
        >
          <h4>{{ element }}</h4>
        </div>
        <div
          :class="[
            `${props.baseCssClass}__elemententry`,
            `${props.baseCssClass}__elemententry--value`,
          ]"
          v-html="`value: ${props.elements[element].value}`"
        />
        <div
          :class="[
            `${props.baseCssClass}__elemententry`,
            `${props.baseCssClass}__elemententry--datatype`,
          ]"
        >
          datatype: {{ props.elements[element].dataType }}
        </div>
        <div
          :class="[
            `${props.baseCssClass}__elemententry`,
            `${props.baseCssClass}__elemententry--multivalue`,
          ]"
        >
          multivalue:
          {{ props.elements[element].multiValue ? 'true' : 'false' }}
        </div>
        <div
          :class="[
            `${props.baseCssClass}__elemententry`,
            `${props.baseCssClass}__elemententry--type`,
          ]"
        >
          type: {{ props.elements[element][':type'] }}
        </div>
      </div>
    </div>
    <component
      :is="childComponent"
      v-for="childComponent of childComponents"
      :key="childComponent.toString()"
    />
  </div>
</template>
