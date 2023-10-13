import { Model } from '@adobe/aem-spa-page-model-manager';
import { defineComponent, h, PropType } from 'vue';
import {
  componentClassNames,
  ComponentMapping,
} from 'aem-vue-3-editable-components';
import { mount } from '@vue/test-utils';
import CoreExperienceFragment from '@/components/CoreExperienceFragment.vue';

describe('CoreExperienceFragment ->', () => {
  interface CoreContainerItem extends Model {
    'cq:panelTitle': string;
  }

  const allowedComponent = {
    path: '/apps/core/components/dummy',
    title: 'Some Component',
  };

  const allowedComponents = {
    applicable: true,
    components: [allowedComponent],
  };

  const dummyItems: { [key: string]: CoreContainerItem } = {
    test: {
      ':type': 'core/components/dummy',
      'cq:panelTitle': 'Item1',
      // @ts-ignore
      value: 'Component1',
      id: 'test',
    },
    test2: {
      ':type': 'core/components/dummy',
      'cq:panelTitle': 'Item2',
      // @ts-ignore
      value: 'Component2',
      id: 'test2',
    },
  };

  const DummyCoreComponent = defineComponent({
    name: 'DummyCoreComponent',
    inheritAttrs: false,
    props: {
      // eslint-disable-next-line vue/require-default-prop
      id: {
        type: String,
      },
      containerProps: {
        type: Object as PropType<{ [key: string]: string }>,
        default: () => {},
      },
      // eslint-disable-next-line vue/require-default-prop
      value: {
        type: String,
      },
    },
    render() {
      return h(
        'div',
        {
          id: this.id,
          class: componentClassNames(
            'dummyCmp',
            undefined,
            undefined,
            this.containerProps,
            false,
            true,
          ),
        },
        this.value,
      );
    },
  });

  const defaultProps = {
    id: 'experiencefragment-b773b640dc',
    cqItems: dummyItems,
    cqItemsOrder: ['test', 'test2'],
    allowedComponents,
    aemNoDecoration: true,
  };

  let ComponentMappingSpy: jest.SpyInstance;

  beforeEach(() => {
    ComponentMappingSpy = jest.spyOn(ComponentMapping, 'get');
    ComponentMappingSpy.mockReturnValue(DummyCoreComponent);
  });

  it('Does not contain attributes consistent with being in edit mode', () => {
    const wrapper = mount(CoreExperienceFragment, {
      propsData: defaultProps,
      global: {
        provide: {
          isInEditor: true,
        },
      },
    });

    expect(wrapper.find('div[data-cq-data-path]').exists()).toBeFalsy();
  });
});
