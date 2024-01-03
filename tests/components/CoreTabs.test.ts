import { ComponentMapping } from 'aem-vue-3-editable-components';
import { defineComponent, h } from 'vue';
import { mount } from '@vue/test-utils';
import userEvent from '@testing-library/user-event';
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
      // @ts-ignore
      value: 'Component1',
    },
    test2: {
      ':type': 'core/components/dummy',
      'cq:panelTitle': 'Item2',
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
    expect(dummyComponents[0].textContent).toEqual('Component1');

    const anchors = wrapper.element.querySelectorAll('.cmp-tabs__tab');

    expect(anchors).toHaveLength(2);

    const tab1 = anchors[0];
    const tab2 = anchors[anchors.length - 1];

    await userEvent.click(tab2 as HTMLElement);

    let activeTabPanel = wrapper.element.querySelector(
      '.cmp-tabs__tabpanel--active',
    );
    expect(activeTabPanel!.textContent).toEqual('Component2');

    await userEvent.click(tab1 as HTMLElement);

    activeTabPanel = wrapper.element.querySelector(
      '.cmp-tabs__tabpanel--active',
    );

    expect(activeTabPanel!.textContent).toEqual('Component1');
  });

  it('Changes when you switch tabs in author mode', () => {
    const callbacks: { (message: unknown): void }[] = [];
    const messageChannel = jest.fn();
    messageChannel.mockReturnValue({
      subscribeRequestMessage: (
        // @ts-ignore
        topic: string,
        callback: (message: unknown) => void,
      ) => {
        callbacks.push(callback);
      },
      unsubscribeRequestMessage: (
        // @ts-ignore
        topic: string,
        callback: (message: unknown) => void,
      ) => {
        const index: number = callbacks.indexOf(callback);
        callbacks.splice(index, 1);
      },
    });
    // @ts-ignore
    window.Granite = {
      author: {
        trigger: (path: string, index: number) => {
          callbacks.forEach((callback) =>
            callback({
              data: {
                id: path,
                operation: 'navigate',
                index,
              },
            }),
          );
        },
        MessageChannel: messageChannel,
      },
    };

    const wrapper = mount(CoreTabs, {
      propsData: defaultProps,
      global: {
        provide: {
          isInEditor: true,
          componentMapping: new ComponentMapping(),
        },
      },
    });
    expect(wrapper.find('.cmp-tabs').exists()).toBeTruthy();

    // @ts-ignore
    window.Granite.author.trigger('/content/tabs-path', 1);

    let activeTabPanel = wrapper.element.querySelector(
      '.cmp-tabs__tabpanel--active',
    );
    expect(activeTabPanel!.textContent).toEqual('Component2');
    // @ts-ignore
    window.Granite.author.trigger('/content/tabs-path', 0);

    activeTabPanel = wrapper.element.querySelector(
      '.cmp-tabs__tabpanel--active',
    );

    expect(activeTabPanel!.textContent).toEqual('Component1');
  });
});
