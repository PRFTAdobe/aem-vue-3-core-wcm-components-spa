import { Ref } from 'vue';

declare global {
  interface Window {
    Granite: unknown;
  }
}

const SpaUtils = {
  createCallbackListener(
    cqPathArgument: string | undefined,
    activeIndexFromAuthorPanel: Ref<number>,
  ) {
    return (
      message: {
        id: number;
        data: {
          id: string;
          index: number;
          operation: string;
        };
      },
      cqPath = cqPathArgument,
    ) => {
      if (message.data && message.data.id === cqPath) {
        if (message.data.operation === 'navigate') {
          activeIndexFromAuthorPanel.value = message.data.index;
        }
      }
    };
  },
  initMessageChannel() {
    if (
      this.isBrowser() &&
      window.Granite &&
      // @ts-ignore
      window.Granite.author &&
      // @ts-ignore
      window.Granite.author.MessageChannel
    ) {
      // @ts-ignore
      return new window.Granite.author.MessageChannel('cqauthor', window);
    }
    return null;
  },
  isBrowser() {
    try {
      return typeof window !== 'undefined';
    } catch (err) {
      return false;
    }
  },
  subscribeRequestMessage(
    messageChannel: unknown,
    callbackListener: (
      message: {
        id: number;
        data: { id: string; index: number; operation: string };
      },
      cqPath: string | undefined,
    ) => void,
  ) {
    if (messageChannel) {
      // @ts-ignore
      messageChannel.subscribeRequestMessage(
        'cmp.panelcontainer',
        callbackListener,
      );
    }
  },
  unsubscribeRequestMessage(
    messageChannel: unknown,
    callbackListener: (
      message: {
        id: number;
        data: { id: string; index: number; operation: string };
      },
      cqPath: string | undefined,
    ) => void,
  ) {
    if (messageChannel) {
      // @ts-ignore
      messageChannel.unsubscribeRequestMessage(
        'cmp.panelcontainer',
        callbackListener,
      );
    }
  },
};

export default SpaUtils;
