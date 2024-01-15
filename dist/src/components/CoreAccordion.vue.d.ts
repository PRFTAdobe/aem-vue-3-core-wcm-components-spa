import { PropType } from 'vue';
import { Model } from '@adobe/aem-spa-page-model-manager';
interface AccordionModel extends Model {
    'cq:panelTitle'?: string;
    id?: string;
}
declare const _default: import("vue").DefineComponent<{
    aemNoDecoration: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    cssClassNames: {
        type: StringConstructor;
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
    isInEditor: {
        type: BooleanConstructor;
        default: undefined;
    };
    singleExpansion: {
        type: BooleanConstructor;
        default: undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    aemNoDecoration: {
        type: BooleanConstructor;
        default: boolean;
    };
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
    cssClassNames: {
        type: StringConstructor;
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
    isInEditor: {
        type: BooleanConstructor;
        default: undefined;
    };
    singleExpansion: {
        type: BooleanConstructor;
        default: undefined;
    };
}>>, {
    cqPath: string;
    expandedItems: string[];
    headingElement: string;
    isInEditor: boolean;
    singleExpansion: boolean;
    aemNoDecoration: boolean;
    baseCssClass: string;
    containerProps: {
        [key: string]: string;
    };
}, {}>;
export default _default;
