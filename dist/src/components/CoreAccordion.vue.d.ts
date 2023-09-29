import { PropType } from 'vue';
import { Model } from '@adobe/aem-spa-page-model-manager';
declare global {
    interface Window {
        Granite: unknown;
    }
}
interface AccordionModel extends Model {
    'cq:panelTitle'?: string;
    id?: string;
}
declare const _default: import("vue").DefineComponent<{
    appliedCssClassNames: {
        type: StringConstructor;
    };
    baseCssClass: {
        type: StringConstructor;
        default: string;
    };
    containerProps: {
        type: PropType<{
            [key: string]: string;
        }>;
        default: () => void;
    };
    id: {
        type: StringConstructor;
    };
    cqItems: {
        type: PropType<{
            [key: string]: AccordionModel;
        }>;
    };
    cqItemsOrder: {
        type: PropType<string[]>;
    };
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    expandedItems: {
        type: PropType<string[]>;
        default: () => never[];
    };
    headingElement: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    appliedCssClassNames: {
        type: StringConstructor;
    };
    baseCssClass: {
        type: StringConstructor;
        default: string;
    };
    containerProps: {
        type: PropType<{
            [key: string]: string;
        }>;
        default: () => void;
    };
    id: {
        type: StringConstructor;
    };
    cqItems: {
        type: PropType<{
            [key: string]: AccordionModel;
        }>;
    };
    cqItemsOrder: {
        type: PropType<string[]>;
    };
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    expandedItems: {
        type: PropType<string[]>;
        default: () => never[];
    };
    headingElement: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    cqPath: string;
    expandedItems: string[];
    headingElement: string;
    baseCssClass: string;
    containerProps: {
        [key: string]: string;
    };
}, {}>;
export default _default;
