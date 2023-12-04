import { Model } from '@adobe/aem-spa-page-model-manager';
import {
  ComponentMapping,
  MappedComponentProperties,
  MapTo,
} from 'aem-vue-3-editable-components';
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
  elements: { [key: string]: ContentFragmentElement };
  elementsOrder: string[];
  id: string;
  model: string;
  title: string;
}

const MODEL_PREFIX = 'ContentFragment-';

const getModelKey = (modelType: string) => MODEL_PREFIX + modelType;

const mapRenderer = <
  T extends ContentFragmentProperties = ContentFragmentProperties,
>(
  resourceTypes: string | string[],
  clazz: Component<T>,
) => {
  if (resourceTypes && clazz) {
    const resourceList =
      typeof resourceTypes === 'string' ? [resourceTypes] : resourceTypes;

    resourceList.forEach((entry) => {
      MapTo(getModelKey(entry))(clazz);
    });
  }
};

const getRenderer = <
  T extends ContentFragmentProperties = ContentFragmentProperties,
>(
  model: string,
): Component<T> => {
  const modelKey: string = getModelKey(model);
  return ComponentMapping.get<Component<T>>(modelKey);
};

const MapToContentFragmentModel =
  <T extends ContentFragmentProperties = ContentFragmentProperties>(
    models: string | string[],
  ): ((clazz: Component<T>) => void) =>
  (clazz: Component<T>) =>
    mapRenderer<T>(models, clazz);

export { MapToContentFragmentModel, mapRenderer, getRenderer };
