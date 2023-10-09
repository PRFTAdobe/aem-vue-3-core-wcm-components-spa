import { EditConfig, MappedComponentProperties } from 'aem-vue-3-editable-components';
interface AccordionComponentProperties extends MappedComponentProperties {
    cqItemsOrder: string[] | undefined;
}
export declare const AccordionEditConfig: EditConfig<AccordionComponentProperties>;
export {};
