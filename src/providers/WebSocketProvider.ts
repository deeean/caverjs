import { Provider } from '~/providers/Provider';
import { Deferred } from '~/shared';
import * as JsonRpc from '~/jsonrpc';
import WebSocket, { ICloseEvent, IMessageEvent } from 'websocket';

export class WebSocketProvider extends Provider {
  private websocket: WebSocket.w3cwebsocket;
  private readyForOpen = new Deferred<void>();
  private deferredMap = new Map<number, Deferred<JsonRpc.JsonRpcResponse>>();

  constructor(rawurl: string, headers: { [key: string]: string } = {}) {
    super(rawurl, headers);

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

  onClose(event: ICloseEvent) {}

  onMessage(message: IMessageEvent) {
    const body = typeof message.data === 'string' ? message.data : '';
    const jsonrpc: JsonRpc.JsonRpcResponse = JSON.parse(body);
    const deferred = this.deferredMap.get(jsonrpc.id);
    if (!deferred) {
      return;
    }

    deferred.resolve(jsonrpc);
  }

  async execute<T>(method: string, params: Array<JsonRpc.JsonRpcValue>): Promise<T> {
    if (this.websocket.readyState !== WebSocket.w3cwebsocket.OPEN) {
      await this.readyForOpen.promise;
    }

    const payload = this.prepare(method, params);

    this.websocket.send(JSON.stringify(payload));

    const deferred = new Deferred<JsonRpc.JsonRpcResponse<T>>();
    this.deferredMap.set(payload.id, deferred);

    const response = await deferred.promise;
    this.deferredMap.delete(payload.id);

    return this.complete(response);
  }
}
