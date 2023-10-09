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
