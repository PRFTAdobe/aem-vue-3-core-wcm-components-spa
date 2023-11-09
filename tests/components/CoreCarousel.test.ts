import { mount } from '@vue/test-utils';
import { ComponentMapping } from 'aem-vue-3-editable-components';
import { defineComponent, h, nextTick } from 'vue';
import userEvent from '@testing-library/user-event';
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
      play: 'Play',
      pause: 'Pause',
      next: 'Next',
      previous: 'Previous',
      slide: 'Slide {0} of {1}',
      indicator: 'Slide {0}',
      indicators: 'Choose a slide to display',
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

    await userEvent.click(nextButton.element as HTMLElement);

    expect(wrapper.find('.cmp-carousel__item--active').text()).toEqual(
      'Component2',
    );

    const prevButton = wrapper.find('.cmp-carousel__action--previous');
    expect(prevButton.exists()).toBeTruthy();

    await userEvent.click(prevButton.element as HTMLElement);

    expect(wrapper.find('.cmp-carousel__item--active').text()).toEqual(
      'Component1',
    );

    const indicators = wrapper.element.querySelectorAll(
      '.cmp-carousel__indicators li',
    );
    const indicator1 = indicators[0];
    const indicator2 = indicators[indicators.length - 1];

    await userEvent.click(indicator2 as HTMLElement);

    expect(wrapper.find('.cmp-carousel__item--active').text()).toEqual(
      'Component2',
    );

    await userEvent.click(indicator1 as HTMLElement);

    expect(wrapper.find('.cmp-carousel__item--active').text()).toEqual(
      'Component1',
    );
  });

  it('Changes when you switch slide in author mode', async () => {
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

    const wrapper = mount(CoreCarousel, {
      propsData: defaultProps,
      global: {
        provide: {
          isInEditor: true,
          componentMapping: new ComponentMapping(),
        },
      },
    });

    // @ts-ignore
    window.Granite.author.trigger('/content/carousel-path', 1);
    await nextTick();
    expect(wrapper.find('.cmp-carousel__item--active').text()).toEqual(
      'Component2',
    );
  });
});
