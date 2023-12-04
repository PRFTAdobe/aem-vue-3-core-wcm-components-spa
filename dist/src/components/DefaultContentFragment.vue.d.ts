import { PropType } from 'vue';
import { Model } from '@adobe/aem-spa-page-model-manager';
interface ContentFragmentElement {
    dataType: string;
    value: string;
    title: string;
    ':type': string;
    multiValue: boolean;
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
            [key: string]: Model;
        }>;
        default: () => {};
    };
    cqItemsOrder: {
        type: PropType<string[]>;
        default: () => never[];
    };
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
    };
    elements: {
        type: PropType<{
            [key: string]: ContentFragmentElement;
        }>;
        default: () => {};
    };
    elementsOrder: {
        type: PropType<string[]>;
        default: () => never[];
    };
    isInEditor: {
        type: BooleanConstructor;
        default: undefined;
    };
    model: {
        type: StringConstructor;
    };
    title: {
        type: StringConstructor;
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
            [key: string]: Model;
        }>;
        default: () => {};
    };
    cqItemsOrder: {
        type: PropType<string[]>;
        default: () => never[];
    };
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
    };
    elements: {
        type: PropType<{
            [key: string]: ContentFragmentElement;
        }>;
        default: () => {};
    };
    elementsOrder: {
        type: PropType<string[]>;
        default: () => never[];
    };
    isInEditor: {
        type: BooleanConstructor;
        default: undefined;
    };
    model: {
        type: StringConstructor;
    };
    title: {
        type: StringConstructor;
    };
}>>, {
    cqItems: {
        [key: string]: Model;
    };
    cqItemsOrder: string[];
    cqPath: string;
    aemNoDecoration: boolean;
    baseCssClass: string;
    containerProps: {
        [key: string]: string;
    };
    isInEditor: boolean;
    elements: {
        [key: string]: ContentFragmentElement;
    };
    elementsOrder: string[];
}, {}>;
export default _default;
