import { defineComponent, h, PropType } from 'vue';
import { Model } from '@adobe/aem-spa-page-model-manager';
import {
  componentClassNames,
  ComponentMapping,
} from 'aem-vue-3-editable-components';
import { mount } from '@vue/test-utils';
import CoreContainer from '@/components/CoreContainer.vue';

const GRID_CLASS_NAMES = 'grid-class-names';
const COLUMN_1_CLASS_NAMES = 'column-class-names-1';
const COLUMN_2_CLASS_NAMES = 'column-class-names-2';

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
          this.containerProps,
          false,
        ),
      },
      this.value,
    );
  },
});

const defaultProps = {
  id: 'myid',
  title: 'The Container',
  cqItems: dummyItems,
  cqItemsOrder: ['test', 'test2'],
  layout: 'RESPONSIVE_GRID',
  backgroundStyle: 'background-color:red',
  cqPath: '/content/accordion-path',
  columnClassNames: {
    test: COLUMN_1_CLASS_NAMES,
    test2: COLUMN_2_CLASS_NAMES,
  },
  gridClassNames: GRID_CLASS_NAMES,
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

describe('CoreContainer ->', () => {
  it('Renders without crashing', () => {
    const wrapper = mount(CoreContainer, {
      propsData: defaultProps,
      global: {
        provide: {
          isInEditor: false,
        },
      },
    });
    expect(wrapper.find('.cmp-container').exists()).toBeTruthy();
  });

  it('Renders a responsive grid properly', () => {
    const wrapper = mount(CoreContainer, {
      propsData: defaultProps,
      global: {
        provide: {
          isInEditor: false,
        },
      },
    });

    const { element } = wrapper.find('.cmp-container');
    const containerStyle = element.getAttribute('style');
    expect(containerStyle).toEqual('background-color: red;');

    const column1 = element.querySelector(`.${COLUMN_1_CLASS_NAMES}`);
    expect(column1 === null).toBeFalsy();
    expect(column1?.textContent).toEqual('Component1');

    const column2 = element.querySelector(`.${COLUMN_2_CLASS_NAMES}`);
    expect(column2 === null).toBeFalsy();
    expect(column2?.textContent).toEqual('Component2');
  });

  it('Renders a basic container properly', () => {
    const wrapper = mount(CoreContainer, {
      propsData: { ...defaultProps, layout: 'SIMPLE' },
      global: {
        provide: {
          isInEditor: false,
        },
      },
    });

    const { element } = wrapper.find('.cmp-container');
    const containerStyle = element.getAttribute('style');
    expect(containerStyle).toEqual('background-color: red;');

    const column1 = element.querySelector(`.${COLUMN_1_CLASS_NAMES}`);
    expect(column1 === null).toBeTruthy();

    const column2 = element.querySelector(`.${COLUMN_2_CLASS_NAMES}`);
    expect(column2 === null).toBeTruthy();

    expect(element.querySelectorAll('.dummyCmp')).toHaveLength(2);
  });
});
