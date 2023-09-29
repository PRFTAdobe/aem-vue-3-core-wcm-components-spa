/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMapping } from 'aem-vue-3-editable-components';
import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import '@testing-library/jest-dom';
import { queryByAttribute, render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import CoreAccordion from '@/components/CoreAccordion.vue';

export const dummyItems = {
  test: {
    ':type': 'core/components/dummy',
    'cq:panelTitle': 'Item1',
    value: 'Component1',
    id: 'test',
  },
  test2: {
    ':type': 'core/components/dummy',
    'cq:panelTitle': 'Item2',
    value: 'Component2',
    id: 'test2',
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
  expandedItems: ['test'],
  headingElement: 'h2',
  singleExpansion: false,
  cqItems: dummyItems,
  cqItemsOrder: ['test', 'test2'],
  title: 'Accordion',
  isInEditor: false,
  cqPath: '/content/accordion-path',
};

let ComponentMappingSpy: jest.SpyInstance;

beforeEach(() => {
  ComponentMappingSpy = jest.spyOn(ComponentMapping, 'get');
  ComponentMappingSpy.mockReturnValue(DummyCoreComponent);
});

afterEach(() => {
  ComponentMappingSpy.mockRestore();
});

const getById = queryByAttribute.bind(null, 'id');

describe('CoreAccordion ->', () => {
  it('Renders without crashing', () => {
    // @ts-ignore
    const wrapper = mount(CoreAccordion, {
      propsData: defaultProps,
      global: {
        provide: {
          isInEditor: false,
          componentMapping: new ComponentMapping(),
        },
      },
    });
    expect(wrapper.find('.cmp-accordion').exists()).toBeTruthy();
  });

  it('Renders a basic accordion properly', () => {
    // @ts-ignore
    const wrapper = mount(CoreAccordion, {
      propsData: defaultProps,
      global: {
        provide: {
          isInEditor: false,
          componentMapping: new ComponentMapping(),
        },
      },
    });
    const accordionRoot = wrapper.findAll('.cmp-accordion');
    expect(accordionRoot).toHaveLength(1);

    const dummyComp = wrapper.findAll('.dummyCmp');
    expect(dummyComp).toHaveLength(1);
    expect(dummyComp[0].text()).toEqual('Component1');
  });

  it('Renders out all items in author mode with hidden CSS', () => {
    // @ts-ignore
    const wrapper = mount(CoreAccordion, {
      propsData: defaultProps,
      global: {
        provide: {
          isInEditor: true,
          componentMapping: new ComponentMapping(),
        },
      },
    });
    const accordionRoot = wrapper.findAll('.cmp-accordion');
    expect(accordionRoot).toHaveLength(1);

    const dummyComp = wrapper.findAll('.dummyCmp');
    expect(dummyComp).toHaveLength(2);
  });

  it('Changes item when you click - single expansion', async () => {
    const dom = render(CoreAccordion, {
      props: { ...defaultProps, singleExpansion: true },
    });
    const component1 = screen.getByText('Component1');
    expect(component1).toBeInTheDocument();

    const button2 = getById(
      dom.container as HTMLElement,
      'accordion-test2-button',
    );

    expect(
      button2?.classList.contains('cmp-accordion__button--expanded'),
    ).toBeFalsy();

    await userEvent.click(button2 as HTMLElement);

    expect(
      button2?.classList.contains('cmp-accordion__button--expanded'),
    ).toBeTruthy();

    const component2 = screen.getByText('Component2');
    expect(component2).toBeInTheDocument();
  });

  it('Changes item when you click - multi expansion', async () => {
    const dom = render(CoreAccordion, {
      props: { ...defaultProps },
    });
    expect(dom.container.querySelectorAll('.dummyCmp').length).toEqual(1);

    const button2 = getById(
      dom.container as HTMLElement,
      'accordion-test2-button',
    );

    await userEvent.click(button2 as HTMLElement);

    expect(dom.container.querySelectorAll('.dummyCmp').length).toEqual(2);
  });
});
