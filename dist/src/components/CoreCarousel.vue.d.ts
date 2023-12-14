import { PropType } from 'vue';
import { Model } from '@adobe/aem-spa-page-model-manager';
declare global {
    interface Window {
        Granite: unknown;
    }
}
interface CarouselAccessibilityProperties {
    play: string;
    pause: string;
    next: string;
    previous: string;
    slide: string;
    indicator: string;
    indicators: string;
}
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
        type: PropType<CarouselAccessibilityProperties>;
        default: () => {
            play: string;
            pause: string;
            next: string;
            previous: string;
            slide: string;
            indicator: string;
            indicators: string;
        };
    };
    accessibilityLabel: {
        type: StringConstructor;
        default: string;
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
        type: PropType<CarouselAccessibilityProperties>;
        default: () => {
            play: string;
            pause: string;
            next: string;
            previous: string;
            slide: string;
            indicator: string;
            indicators: string;
        };
    };
    accessibilityLabel: {
        type: StringConstructor;
        default: string;
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
    aemNoDecoration: boolean;
    baseCssClass: string;
    containerProps: {
        [key: string]: string;
    };
    isInEditor: boolean;
    accessibility: CarouselAccessibilityProperties;
    accessibilityLabel: string;
    autopauseDisabled: boolean;
    delay: number;
}, {}>;
export default _default;
