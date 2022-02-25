import * as JsonRpc from '~/jsonrpc';
import { Provider, ProviderType } from '~/providers/Provider';

export class HttpProvider implements Provider {
  id = 0;
  type: ProviderType = 'http';
  rawurl: string;
  headers: { [key: string]: string };

  constructor(rawurl: string, headers: { [key: string]: string } = {}) {
    this.rawurl = rawurl;
    this.headers = headers;
  }

  async execute(method: string, params: Array<JsonRpc.JsonRpcValue>) {
    const data: JsonRpc.JsonRpcPayload = {
      id: ++this.id,
      jsonrpc: JsonRpc.JsonRpcVersion.V2,
      method,
      params,
    };

    const response = await fetch(this.rawurl, {
      method: 'POST',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return;
    }

    return await response.json();
  }
}
