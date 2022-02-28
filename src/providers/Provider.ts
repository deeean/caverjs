import * as JsonRpc from '~/jsonrpc';

export interface Provider {
  id: number;
  rawurl: string;
  execute<T = unknown>(method: string, params: Array<JsonRpc.JsonRpcValue>): Promise<JsonRpc.JsonRpcResponse<T>>;
}
