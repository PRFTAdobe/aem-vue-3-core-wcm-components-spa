import {
  ComponentMapping,
  MappedComponentProperties,
} from 'aem-vue-3-editable-components';
import { ModelManager } from '@adobe/aem-spa-page-model-manager';
import { mount } from '@vue/test-utils';
import { Component, defineComponent, h } from 'vue';
import CoreContentFragment from '@/components/CoreContentFragment.vue';
import DefaultContentFragment from '@/components/DefaultContentFragment.vue';
import { MapToContentFragmentModel } from '@/components/ContentFragmentRegistry';
import { ContentFragmentEditConfig } from '@/components/CoreEditConfigs';
import defaultProps from './CoreContentFragment.json';

interface ContentFragmentComponentProperties extends MappedComponentProperties {
  cqItemsOrder: string[] | undefined;
  elementsOrder: string[] | undefined;
}

describe('CoreContentFragment ->', () => {
  const DummyComponent = defineComponent({
    name: 'DummyComponent',
    inheritAttrs: false,
    render() {
      return h(DefaultContentFragment, {
        ...this.$attrs,
        title: 'Hi! This is my custom Content Fragment component!',
        baseCssClass: 'cmp-custom-contentfragment',
      });
    },
  });

  let AddListenerSpy;
  let RemoveListener;
  let GetDataSpy: jest.SpyInstance;

  beforeEach(() => {
    AddListenerSpy = jest.spyOn(ModelManager, 'addListener');
    RemoveListener = jest.spyOn(ModelManager, 'removeListener');
    GetDataSpy = jest.spyOn(ModelManager, 'getData');

    AddListenerSpy.mockReturnValue();
    RemoveListener.mockReturnValue();
    GetDataSpy.mockResolvedValue({});
  });

  it('Renders without crashing', () => {
    const wrapper = mount(CoreContentFragment, {
      propsData: defaultProps,
      global: {
        provide: {
          isInEditor: false,
          componentMapping: new ComponentMapping(),
        },
      },
    });

    expect(wrapper.find('.cmp-contentfragment').exists()).toBeTruthy();
  });

  it('Renders a custom component properly', () => {
    MapToContentFragmentModel('core-components-examples/models/about')(
      DummyComponent as Component,
    );
    const wrapper = mount(CoreContentFragment, {
      propsData: defaultProps,
      global: {
        provide: {
          isInEditor: false,
          componentMapping: new ComponentMapping(),
        },
      },
    });

    expect(wrapper.find('.cmp-custom-contentfragment').exists()).toBeTruthy();
  });

  it('Has a proper isEmpty function', () => {
    const propsOne: ContentFragmentComponentProperties = {
      cqPath: '',
      cqItemsOrder: [],
      elementsOrder: [],
    };
    expect(ContentFragmentEditConfig.isEmpty(propsOne)).toEqual(true);
  });
});
