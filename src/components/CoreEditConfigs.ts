import {
  EditConfig,
  MappedComponentProperties,
} from 'aem-vue-3-editable-components';

interface AccordionComponentProperties extends MappedComponentProperties {
  cqItemsOrder: string[] | undefined;
}

export const AccordionEditConfig: EditConfig<AccordionComponentProperties> = {
  emptyLabel: 'Accordion',
  // eslint-disable-next-line no-shadow
  isEmpty(props: { cqItemsOrder: string[] | undefined }) {
    return !props.cqItemsOrder || props?.cqItemsOrder.length === 0;
  },
};

interface CarouselComponentProperties extends MappedComponentProperties {
  cqItemsOrder: string[] | undefined;
}

export const CarouselEditConfig: EditConfig<CarouselComponentProperties> = {
  emptyLabel: 'Carousel',
  // eslint-disable-next-line no-shadow
  isEmpty(props: { cqItemsOrder: string[] | undefined }) {
    return !props.cqItemsOrder || props?.cqItemsOrder.length === 0;
  },
};

interface ContainerComponentProperties extends MappedComponentProperties {
  cqItemsOrder: string[] | undefined;
}

export const ContainerEditConfig: EditConfig<ContainerComponentProperties> = {
  emptyLabel: 'Container',
  // eslint-disable-next-line no-shadow
  isEmpty(props: { cqItemsOrder: string[] | undefined }) {
    return !props.cqItemsOrder || props?.cqItemsOrder.length === 0;
  },
};

interface ExperienceFragmentComponentProperties
  extends MappedComponentProperties {
  cqItemsOrder: string[] | undefined;
}

export const ExperienceFragmentEditConfig: EditConfig<ExperienceFragmentComponentProperties> =
  {
    emptyLabel: 'Experience Fragment',
    // eslint-disable-next-line no-shadow
    isEmpty(props: { cqItemsOrder: string[] | undefined }) {
      return !props.cqItemsOrder || props?.cqItemsOrder.length === 0;
    },
  };

interface TabsComponentProperties extends MappedComponentProperties {
  cqItemsOrder: string[] | undefined;
}

export const TabsEditConfig: EditConfig<TabsComponentProperties> = {
  emptyLabel: 'Tabs',
  // eslint-disable-next-line no-shadow
  isEmpty(props: { cqItemsOrder: string[] | undefined }) {
    return !props.cqItemsOrder || props?.cqItemsOrder.length === 0;
  },
};
