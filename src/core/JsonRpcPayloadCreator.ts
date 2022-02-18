export interface JsonRpcPayload {
  id: number;
  jsonrpc: '2.0';
  method: string;
  params: Array<unknown> | unknown;
}

export class JsonRpcPayloadCreator {
  public id: number = 0;

  public createPayload(method: JsonRpcPayload['method'], params: JsonRpcPayload['params'] = []): JsonRpcPayload {
    return {
      id: this.id++,
      jsonrpc: '2.0',
      method,
      params,
    };
  }
}
