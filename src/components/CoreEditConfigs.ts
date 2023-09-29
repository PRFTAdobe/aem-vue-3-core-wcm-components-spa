export const AccordionEditConfig = {
  emptyLabel: 'Accordion',
  // eslint-disable-next-line no-shadow
  isEmpty(props: { cqItemsOrder: string[] | undefined }) {
    return !props.cqItemsOrder || props?.cqItemsOrder.length === 0;
  },
};
