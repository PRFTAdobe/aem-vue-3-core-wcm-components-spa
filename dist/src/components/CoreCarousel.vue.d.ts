import { PropType } from 'vue';
import { Model } from '@adobe/aem-spa-page-model-manager';
interface CarouselModel extends Model {
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
    accessibility: {
        type: PropType<{
            slide: string;
            indicator: string;
        }>;
        default: () => {
            slide: string;
            indicator: string;
        };
    };
    accessibilityLabel: {
        type: StringConstructor;
        default: string;
    };
    accessibilityNext: {
        type: StringConstructor;
        default: string;
    };
    accessibilityPause: {
        type: StringConstructor;
        default: string;
    };
    accessibilityPlay: {
        type: StringConstructor;
        default: string;
    };
    accessibilityPrevious: {
        type: StringConstructor;
        default: string;
    };
    accessibilityTablist: {
        type: StringConstructor;
        default: string;
    };
    activeItem: {
        type: StringConstructor;
    };
    autopauseDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    cqItems: {
        type: PropType<{
            [key: string]: CarouselModel;
        }>;
    };
    cqItemsOrder: {
        type: PropType<string[]>;
    };
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    controlsPrepended: {
        type: BooleanConstructor;
        default: boolean;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    isInEditor: {
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
    accessibility: {
        type: PropType<{
            slide: string;
            indicator: string;
        }>;
        default: () => {
            slide: string;
            indicator: string;
        };
    };
    accessibilityLabel: {
        type: StringConstructor;
        default: string;
    };
    accessibilityNext: {
        type: StringConstructor;
        default: string;
    };
    accessibilityPause: {
        type: StringConstructor;
        default: string;
    };
    accessibilityPlay: {
        type: StringConstructor;
        default: string;
    };
    accessibilityPrevious: {
        type: StringConstructor;
        default: string;
    };
    accessibilityTablist: {
        type: StringConstructor;
        default: string;
    };
    activeItem: {
        type: StringConstructor;
    };
    autopauseDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    cqItems: {
        type: PropType<{
            [key: string]: CarouselModel;
        }>;
    };
    cqItemsOrder: {
        type: PropType<string[]>;
    };
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    controlsPrepended: {
        type: BooleanConstructor;
        default: boolean;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    isInEditor: {
        type: BooleanConstructor;
        default: undefined;
    };
}>>, {
    cqPath: string;
    isInEditor: boolean;
    aemNoDecoration: boolean;
    baseCssClass: string;
    containerProps: {
        [key: string]: string;
    };
    accessibility: {
        slide: string;
        indicator: string;
    };
    accessibilityLabel: string;
    accessibilityNext: string;
    accessibilityPause: string;
    accessibilityPlay: string;
    accessibilityPrevious: string;
    accessibilityTablist: string;
    autopauseDisabled: boolean;
    controlsPrepended: boolean;
    delay: number;
}, {}>;
export default _default;
