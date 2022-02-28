export type JsonRpcValue = number | string | boolean | null;

export enum JsonRpcVersion {
  V1 = '1.0',
  V2 = '2.0',
}

export interface JsonRpcPayload {
  id: number;
  jsonrpc: JsonRpcVersion;
  method: string;
  params: Array<JsonRpcValue>;
}

export interface JsonRpcError {
  code: number;
  message: string;
}

export interface JsonRpcResponse<T = unknown> {
  id: number;
  jsonrpc: JsonRpcVersion;
  result: T;
  error?: JsonRpcError;
}
