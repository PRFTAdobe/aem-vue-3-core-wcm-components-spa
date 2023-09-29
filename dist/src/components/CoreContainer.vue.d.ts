declare const _default: import("vue").DefineComponent<{
    appliedCssClassNames: {
        type: StringConstructor;
    };
    baseCssClass: {
        type: StringConstructor;
        default: string;
    };
    containerProps: {
        type: import("vue").PropType<{
            [key: string]: string;
        }>;
        default: () => void;
    };
    id: {
        type: StringConstructor;
    };
    accessibilityLabel: {
        type: StringConstructor;
    };
    aemNoDecoration: {
        type: BooleanConstructor;
        default: boolean;
    };
    backgroundStyle: {
        type: StringConstructor;
    };
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    layout: {
        type: StringConstructor;
        default: string;
        validator: (prop: string) => boolean;
    };
    roleAttribute: {
        type: StringConstructor;
    };
    styleSystemElement: {
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
        type: import("vue").PropType<{
            [key: string]: string;
        }>;
        default: () => void;
    };
    id: {
        type: StringConstructor;
    };
    accessibilityLabel: {
        type: StringConstructor;
    };
    aemNoDecoration: {
        type: BooleanConstructor;
        default: boolean;
    };
    backgroundStyle: {
        type: StringConstructor;
    };
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    layout: {
        type: StringConstructor;
        default: string;
        validator: (prop: string) => boolean;
    };
    roleAttribute: {
        type: StringConstructor;
    };
    styleSystemElement: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    cqPath: string;
    baseCssClass: string;
    containerProps: {
        [key: string]: string;
    };
    aemNoDecoration: boolean;
    layout: string;
    styleSystemElement: string;
}, {}>;
export default _default;
