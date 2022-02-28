import { Provider } from '~/providers/Provider';
import * as JsonRpc from '~/jsonrpc';
import WebSocket from 'websocket';

export class WebSocketProvider implements Provider {
  id: number;
  rawurl: string;
  websocket: WebSocket.w3cwebsocket;

  constructor(rawurl: string) {
    this.rawurl = rawurl;
    this.connect();
  }

  connect() {
    this.websocket = new WebSocket.w3cwebsocket(this.rawurl);
    this.websocket.onmessage = message => {
      console.log('Message', message);
    };

    this.websocket.onopen = () => {
      console.log('Open');
    };

    this.websocket.onclose = e => {
      console.log('Close', e);
    };
  }

  async execute<T>(method: string, params: Array<JsonRpc.JsonRpcValue>): Promise<JsonRpc.JsonRpcResponse<T>> {
    // console.log('asdf');
    // await new Promise<void>(resolve => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 10);
    // });
    //
    // console.log(this.websocket.readyState);
    //
    // return {} as any;
    // const data: JsonRpc.JsonRpcPayload = {
    //   id: ++this.id,
    //   jsonrpc: JsonRpc.JsonRpcVersion.V2,
    //   method,
    //   params,
    // };
    //
    // const response = await fetch(this.rawurl, {
    //   method: 'POST',
    //   headers: {
    //     ...this.headers,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // });
    //
    // const body: JsonRpc.JsonRpcResponse<T> = await response.json();
    // if (body.error) {
    //   const { code, message } = body.error;
    //   switch (code) {
    //     case CaverErrorCode.DEFAULT_ERROR:
    //       throw new DefaultError(message);
    //     case CaverErrorCode.INVALID_PARAMS:
    //       throw new InvalidParamsError(message);
    //     case CaverErrorCode.INVALID_REQUEST:
    //       throw new InvalidRequestError(message);
    //     case CaverErrorCode.INVALID_MESSAGE:
    //       throw new InvalidMessageError(message);
    //     case CaverErrorCode.METHOD_NOT_FOUND:
    //       throw new MethodNotFoundError(message);
    //     default:
    //       throw new UnexpectedError(code, message);
    //   }
    // }
    //
    // return body;
  }
}
