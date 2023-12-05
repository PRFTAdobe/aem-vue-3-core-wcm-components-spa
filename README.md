# AEM WCM Components - Spa editor - Vue Core implementation

This module provides a Vue implementation for the containers in
the [AEM core components](https://www.aemcomponents.dev/).
This only works with
the [AEM SPA editor](https://docs.adobe.com/content/help/en/experience-manager-64/developing/headless/spas/spa-overview.html).

[Introduction Video and Demo](https://www.youtube.com/watch?v=9759AhM7fAc)

Current supported / exported components:

### Containers

- Accordion
- Carousel
- Container
- Tabs

## Usage

You can choose to import the entire library at once OR import components individually.
The latter is useful if you want to only enable a few components and you want to save your javascript footprint.

### Importing the whole library:

```
import * as SpaCoreComponents from "aem-vue-3-core-wcm-components-spa";
const { CoreContainer, CoreContainerProperties } = SpaCoreComponents;
```

### Importing the CarouselV1 component individually:

```
import {
    CoreContainer,
    CoreContainerProperties,
} from 'aem-vue-3-core-wcm-components-spa';
```

### Using the imported code

Now that you have the CoreContainer and CoreContainerProperties imported, you can use them in your project.
The properties of the CoreContainer 1 on 1 correspond to the Sling Model Exporter (.model.json) output.

Note: There are some exceptions where some extra properties are added (mainly i18n labels) that are currently not
present in the OOTB sling model exports.
These can be added by the project itself with delegation. If they are not present, the default (English) values will be
used.

#### Accordion - Example with the spa editor:

```
import { CoreAccordion } from 'aem-vue-3-core-wcm-components-spa';

const CoreAccordionEditConfig = CoreAccordion.methods?.getEditConfig();

MapTo('my-project/components/accordion')(
  CoreAccordion,
  CoreAccordionEditConfig
);
```
