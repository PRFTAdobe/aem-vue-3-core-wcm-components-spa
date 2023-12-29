import { mount } from '@vue/test-utils';
import { ComponentMapping } from 'aem-vue-3-editable-components';
import { defineComponent, h } from 'vue';
import CoreCarousel from '@/components/CoreCarousel.vue';

describe('CoreCarousel ->', () => {
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

  const allowedComponent = {
    path: '/apps/core/components/dummy',
    title: 'Some Component',
  };

  const allowedComponents = {
    applicable: true,
    components: [allowedComponent],
  };

  const defaultProps = {
    accessibilityLabel: 'Carousel',
    accessibility: {
      slide: 'Slide {0} of {1}',
      indicator: 'Slide {0}',
    },
    autopauseDisabled: false,
    autoplay: true,
    delay: 100,
    cqItems: dummyItems,
    cqItemsOrder: ['test', 'test2'],
    id: 'carousel',
    title: 'Carousel',
    isInEditor: false,
    cqPath: '/content/carousel-path',
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
    // @ts-ignore
    const wrapper = mount(CoreCarousel, {
      propsData: defaultProps,
      global: {
        provide: {
          isInEditor: false,
          componentMapping: new ComponentMapping(),
        },
      },
    });
    expect(wrapper.find('.cmp-carousel').exists()).toBeTruthy();
  });

  it('Renders a basic carousel properly and reacts on clicks', async () => {
    const wrapper = mount(CoreCarousel, {
      propsData: defaultProps,
      global: {
        provide: {
          isInEditor: false,
          componentMapping: new ComponentMapping(),
        },
      },
    });
    const carouselContent = wrapper.element.querySelectorAll(
      '.cmp-carousel__content',
    );
    expect(carouselContent).toHaveLength(1);
    expect(wrapper.find('.cmp-carousel__item--active').text()).toEqual(
      'Component1',
    );
    const carouselItems = wrapper.element.querySelectorAll(
      '.cmp-carousel__item',
    );
    Array.from(carouselItems).forEach((carouselItem, index) => {
      expect((carouselItem as HTMLElement).getAttribute('aria-label')).toEqual(
        `Slide ${index + 1} of ${carouselItems.length}`,
      );
    });
    expect(
      wrapper.element.querySelectorAll('.cmp-carousel__action'),
    ).toHaveLength(4);

    const pauseButton = wrapper.find('.cmp-carousel__action--pause');
    expect(pauseButton.element.getAttribute('aria-label')).toEqual('Pause');

    const playButton = wrapper.find('.cmp-carousel__action--play');
    expect(playButton.element.getAttribute('aria-label')).toEqual('Play');

    const nextButton = wrapper.find('.cmp-carousel__action--next');
    expect(nextButton.exists()).toBeTruthy();

    const prevButton = wrapper.find('.cmp-carousel__action--previous');
    expect(prevButton.exists()).toBeTruthy();

    const indicators = wrapper.element.querySelectorAll(
      '.cmp-carousel__indicators li',
    );
    expect(indicators.length).toEqual(2);
  });

  it('Renders a basic carousel without autoplay', () => {
    const wrapper = mount(CoreCarousel, {
      propsData: { ...defaultProps, autoplay: false },
      global: {
        provide: {
          isInEditor: false,
          componentMapping: new ComponentMapping(),
        },
      },
    });

    expect(wrapper.find('.cmp-carousel__item--active').text()).toEqual(
      'Component1',
    );

    const carouselItems = (wrapper.element as HTMLDivElement).querySelectorAll(
      '.cmp-carousel__item',
    );

    const carouselActions = (
      wrapper.element as HTMLDivElement
    ).querySelectorAll('.cmp-carousel__action');

    expect(carouselItems[0].getAttribute('aria-label')).toEqual('Slide 1 of 2');
    expect(
      carouselItems[carouselItems.length - 1].getAttribute('aria-label'),
    ).toEqual('Slide 2 of 2');

    expect(carouselActions).toHaveLength(2);
  });

  it('Renders out all slides in author mode with hidden CSS', () => {
    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(CoreCarousel, {
      propsData: { ...defaultProps, autoplay: false },
      global: {
        provide: {
          isInEditor: true,
          componentMapping: new ComponentMapping(),
        },
      },
    });

    const dummyComps = (wrapper.element as HTMLDivElement).querySelectorAll(
      '.dummyCmp',
    );

    expect(dummyComps).toHaveLength(2);
  });
});
