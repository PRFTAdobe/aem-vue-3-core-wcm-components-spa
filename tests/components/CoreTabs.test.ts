import { ComponentMapping } from 'aem-vue-3-editable-components';
import { defineComponent, h } from 'vue';
import { mount } from '@vue/test-utils';
import CoreTabs from '@/components/CoreTabs.vue';

describe('CoreTabs ->', () => {
  const allowedComponent = {
    path: '/apps/core/components/dummy',
    title: 'Some Component',
  };

  const allowedComponents = {
    applicable: true,
    components: [allowedComponent],
  };

  const dummyItems = {
    test: {
      ':type': 'core/components/dummy',
      'cq:panelTitle': 'Item1',
      id: 'component-1',
      // @ts-ignore
      value: 'Component1',
    },
    test2: {
      ':type': 'core/components/dummy',
      'cq:panelTitle': 'Item2',
      id: 'component-2',
      // @ts-ignore
      value: 'Component2',
    },
  };

  const DummyCoreComponent = defineComponent({
    name: 'DummyCoreComponent',
    inheritAttrs: false,
    props: {
      id: {
        type: String,
      },
      value: {
        type: String,
      },
    },
    render() {
      return h(
        'div',
        {
          id: this.id,
          class: 'dummyCmp',
        },
        this.value,
      );
    },
  });

  const defaultProps = {
    accessibilityLabel: 'Tabs',
    title: 'The Tabs',
    cqItems: dummyItems,
    cqItemsOrder: ['test', 'test2'],
    cqPath: '/content/tabs-path',
    allowedComponents,
  };

  let ComponentMappingSpy: jest.SpyInstance;

  beforeEach(() => {
    ComponentMappingSpy = jest.spyOn(ComponentMapping, 'get');
    ComponentMappingSpy.mockReturnValue(DummyCoreComponent);
  });

  afterEach(() => {
    ComponentMappingSpy.mockRestore();
  });

  it('Renders without crashing', () => {
    const wrapper = mount(CoreTabs, {
      propsData: defaultProps,
      global: {
        provide: {
          isInEditor: false,
          componentMapping: new ComponentMapping(),
        },
      },
    });
    expect(wrapper.find('.cmp-tabs').exists()).toBeTruthy();
  });

  it('Renders tabs properly and changes on click events', async () => {
    const wrapper = mount(CoreTabs, {
      propsData: defaultProps,
      global: {
        provide: {
          isInEditor: false,
          componentMapping: new ComponentMapping(),
        },
      },
    });
    expect(wrapper.find('.cmp-tabs').exists()).toBeTruthy();

    const dummyComponents = wrapper.element.querySelectorAll('.dummyCmp');
    expect(dummyComponents).toHaveLength(2);

    const anchors = wrapper.element.querySelectorAll('.cmp-tabs__tab');

    expect(anchors).toHaveLength(2);
    expect(dummyComponents[0].textContent).toEqual('Component1');
    expect(dummyComponents[1]!.textContent).toEqual('Component2');
  });
});
