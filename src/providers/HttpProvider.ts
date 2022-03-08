import * as JsonRpc from '~/jsonrpc';
import { Provider } from '~/providers/Provider';

export class HttpProvider extends Provider {
  async execute<T>(method: string, params: Array<JsonRpc.JsonRpcValue>): Promise<T> {
    const payload = this.prepare(method, params);

    const data = await fetch(this.rawurl, {
      method: 'POST',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const response: JsonRpc.JsonRpcResponse<T> = await data.json();

    return this.complete(response);
  }
}
