import * as JsonRpc from '~/jsonrpc';
import { Provider } from '~/providers/Provider';
import {
  CaverErrorCode,
  DefaultError,
  InvalidMessageError,
  InvalidParamsError,
  InvalidRequestError,
  MethodNotFoundError,
  UnexpectedError,
} from '~/exception';

export class HttpProvider implements Provider {
  id = 0;
  rawurl: string;
  headers: { [key: string]: string };

  constructor(rawurl: string, headers: { [key: string]: string } = {}) {
    this.rawurl = rawurl;
    this.headers = headers;
  }

  async execute<T>(method: string, params: Array<JsonRpc.JsonRpcValue>): Promise<JsonRpc.JsonRpcResponse<T>> {
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

    const body: JsonRpc.JsonRpcResponse<T> = await response.json();
    if (body.error) {
      const { code, message } = body.error;
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

    return body;
  }
}
