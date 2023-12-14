import { Ref } from 'vue';
declare global {
    interface Window {
        Granite: unknown;
    }
}
declare const SpaUtils: {
    createCallbackListener(cqPathArgument: string | undefined, activeIndexFromAuthorPanel: Ref<number>): (message: {
        data: {
            id: string;
            index: number;
            operation: string;
        };
    }, cqPath?: string | undefined) => void;
    initMessageChannel(): any;
    isBrowser(): boolean;
    subscribeRequestMessage(messageChannel: unknown, callbackListener: (message: {
        data: {
            id: string;
            index: number;
            operation: string;
        };
    }, cqPath: string | undefined) => void): void;
    unsubscribeRequestMessage(messageChannel: unknown, callbackListener: (message: {
        data: {
            id: string;
            index: number;
            operation: string;
        };
    }, cqPath: string | undefined) => void): void;
};
export default SpaUtils;
