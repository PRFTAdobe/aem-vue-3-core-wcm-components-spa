declare global {
    interface Window {
        Granite: unknown;
    }
}
declare const SpaUtils: {
    initMessageChannel(): any;
    isBrowser(): boolean;
    subscribeRequestMessage(messageChannel: unknown, callbackListener: (message: {
        id: number;
        data: {
            id: string;
            index: number;
            operation: string;
        };
    }, cqPath: string | undefined) => void): void;
    unsubscribeRequestMessage(messageChannel: unknown, callbackListener: (message: {
        id: number;
        data: {
            id: string;
            index: number;
            operation: string;
        };
    }, cqPath: string | undefined) => void): void;
};
export default SpaUtils;
