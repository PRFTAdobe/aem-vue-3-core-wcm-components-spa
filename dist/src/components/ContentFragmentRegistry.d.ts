import { Model } from '@adobe/aem-spa-page-model-manager';
import { MappedComponentProperties } from 'aem-vue-3-editable-components';
import { Component } from 'vue';
interface ContentFragmentElement {
    dataType: string;
    value: string;
    title: string;
    ':type': string;
    multiValue: boolean;
}
interface ContentFragmentProperties extends MappedComponentProperties {
    baseCssClass?: string;
    cqItems: {
        [key: string]: Model;
    };
    cqItemsOrder: string[];
    description: string;
    elements: {
        [key: string]: ContentFragmentElement;
    };
    elementsOrder: string[];
    id: string;
    model: string;
    title: string;
}
declare const mapRenderer: <T extends ContentFragmentProperties = ContentFragmentProperties>(resourceTypes: string | string[], clazz: Component<T>) => void;
declare const getRenderer: <T extends ContentFragmentProperties = ContentFragmentProperties>(model: string) => Component<T>;
declare const MapToContentFragmentModel: <T extends ContentFragmentProperties = ContentFragmentProperties>(models: string | string[]) => (clazz: Component<T>) => void;
export { MapToContentFragmentModel, mapRenderer, getRenderer };
