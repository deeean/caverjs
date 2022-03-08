import * as JsonRpc from '~/jsonrpc';
import { CaverError } from '~/exception';
import { plainToInstance, ClassConstructor } from 'class-transformer';

export class Provider {
  id: number = 0;
  rawurl: string;
  headers: { [key: string]: string };

  constructor(rawurl: string, headers: { [key: string]: string } = {}) {
    this.rawurl = rawurl;
    this.headers = headers;
  }

  async execute<R = unknown>(method: string, params: Array<JsonRpc.JsonRpcValue>): Promise<R> {
    return this.complete<R>({
      id: -1,
      jsonrpc: JsonRpc.JsonRpcVersion.V2,
      result: null,
    });
  }

  async executeWithTransform<T, R = unknown>(
    cls: ClassConstructor<T>,
    method: string,
    params: Array<JsonRpc.JsonRpcValue>,
  ): Promise<T> {
    const result = await this.execute<T>(method, params);
    return plainToInstance(cls, result);
  }

  prepare(method, params: Array<JsonRpc.JsonRpcValue>): JsonRpc.JsonRpcPayload {
    return {
      id: ++this.id,
      jsonrpc: JsonRpc.JsonRpcVersion.V2,
      method,
      params,
    };
  }

  complete<T>({ result, error }: JsonRpc.JsonRpcResponse<T>): T {
    if (error) {
      const { code, message } = error;
      throw new CaverError(code, message);
    }

    return result;
  }
}
