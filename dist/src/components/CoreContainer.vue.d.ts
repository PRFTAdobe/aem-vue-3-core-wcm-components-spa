declare const _default: import("vue").DefineComponent<{
    aemNoDecoration: {
        type: BooleanConstructor;
        default: boolean;
    };
    appliedCssClassNames: {
        type: StringConstructor;
    }; /**
     * Should AllowedComponents list be applied.
     */
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
    cssClassNames: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
    accessibilityLabel: {
        type: StringConstructor;
    };
    backgroundStyle: {
        type: StringConstructor;
    };
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    isInEditor: {
        type: BooleanConstructor;
        default: undefined;
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
    aemNoDecoration: {
        type: BooleanConstructor;
        default: boolean;
    };
    appliedCssClassNames: {
        type: StringConstructor;
    }; /**
     * Should AllowedComponents list be applied.
     */
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
    cssClassNames: {
        type: StringConstructor;
    };
    id: {
        type: StringConstructor;
    };
    accessibilityLabel: {
        type: StringConstructor;
    };
    backgroundStyle: {
        type: StringConstructor;
    };
    cqPath: {
        type: StringConstructor;
        default: string;
    };
    isInEditor: {
        type: BooleanConstructor;
        default: undefined;
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
    isInEditor: boolean;
    aemNoDecoration: boolean;
    baseCssClass: string;
    containerProps: {
        [key: string]: string;
    };
    layout: string;
    styleSystemElement: string;
}, {}>;
export default _default;
