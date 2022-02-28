import { Provider } from '~/providers/Provider';
import * as JsonRpc from '~/jsonrpc';
import WebSocket, { ICloseEvent, IMessageEvent } from 'websocket';
import {
  CaverErrorCode,
  DefaultError,
  InvalidMessageError,
  InvalidParamsError,
  InvalidRequestError, MethodNotFoundError, UnexpectedError
} from "~/exception";

class Deferred<T = unknown> {
  promise: Promise<T>;
  resolve: (...args: Array<unknown>) => void;
  reject: (...args: Array<unknown>) => void;

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}

export class WebSocketProvider implements Provider {
  id: number = 0;
  rawurl: string;
  websocket: WebSocket.w3cwebsocket;

  private readyForOpen = new Deferred();
  private requestMap = new Map<number, Deferred<JsonRpc.JsonRpcResponse>>();

  constructor(rawurl: string) {
    this.rawurl = rawurl;

    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.connect();
  }

  connect() {
    this.websocket = new WebSocket.w3cwebsocket(this.rawurl);
    this.websocket.onopen = this.onOpen;
    this.websocket.onclose = this.onClose;
    this.websocket.onmessage = this.onMessage;
  }

  onOpen() {
    this.readyForOpen.resolve();
  }

  onClose(event: ICloseEvent) {

  }

  onMessage(message: IMessageEvent) {
    const body = typeof message.data === 'string' ? message.data : '';
    const jsonrpc: JsonRpc.JsonRpcResponse = JSON.parse(body);
    const deferred = this.requestMap.get(jsonrpc.id);
    if (!deferred) {
      return;
    }

    deferred.resolve(jsonrpc);
  }

  async execute<T>(method: string, params: Array<JsonRpc.JsonRpcValue>): Promise<JsonRpc.JsonRpcResponse<T>> {
    if (this.websocket.readyState !== WebSocket.w3cwebsocket.OPEN) {
      await this.readyForOpen.promise;
    }

    const data: JsonRpc.JsonRpcPayload = {
      id: ++this.id,
      jsonrpc: JsonRpc.JsonRpcVersion.V2,
      method,
      params,
    };

    this.websocket.send(JSON.stringify(data));

    const deferred = new Deferred<JsonRpc.JsonRpcResponse<T>>();
    this.requestMap.set(data.id, deferred);

    const jsonrpc = await deferred.promise;
    if (jsonrpc.error) {
      const { code, message } = jsonrpc.error;
      switch (code) {
        case CaverErrorCode.DEFAULT_ERROR:
          throw new DefaultError(message);
        case CaverErrorCode.INVALID_PARAMS:
          throw new InvalidParamsError(message);
        case CaverErrorCode.INVALID_REQUEST:
          throw new InvalidRequestError(message);
        case CaverErrorCode.INVALID_MESSAGE:
          throw new InvalidMessageError(message);
        case CaverErrorCode.METHOD_NOT_FOUND:
          throw new MethodNotFoundError(message);
        default:
          throw new UnexpectedError(code, message);
      }
    }

    return jsonrpc;
  }
}
