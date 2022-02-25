import * as JsonRpc from '~/jsonrpc';

export type ProviderType = 'http' | 'ipc' | 'websocket';
export interface Provider {
  id: number;
  type: ProviderType;
  execute<T>(method: string, params: Array<JsonRpc.JsonRpcValue>): Promise<JsonRpc.JsonRpcResponse<T>>;
}
