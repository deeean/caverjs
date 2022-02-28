export enum CaverErrorCode {
  DEFAULT_ERROR = -32000,
  INVALID_REQUEST = -32600,
  METHOD_NOT_FOUND = -32601,
  INVALID_PARAMS = -32602,
  INVALID_MESSAGE = -32700,
}

export class CaverError extends Error {
  constructor(code: CaverErrorCode, prefix: string, message: string) {
    super(`${prefix} (${code}): ${message}`);
  }
}

export class UnexpectedError extends CaverError {
  constructor(code: number, message: string) {
    super(code, 'Unexpected error', message);
  }
}

export class DefaultError extends CaverError {
  constructor(message: string) {
    super(CaverErrorCode.DEFAULT_ERROR, 'Default error', message);
  }
}

export class InvalidRequestError extends CaverError {
  constructor(message: string) {
    super(CaverErrorCode.INVALID_REQUEST, 'Invalid request error', message);
  }
}

export class MethodNotFoundError extends CaverError {
  constructor(message: string) {
    super(CaverErrorCode.METHOD_NOT_FOUND, 'Method not found error', message);
  }
}

export class InvalidParamsError extends CaverError {
  constructor(message: string) {
    super(CaverErrorCode.INVALID_PARAMS, 'Invalid params error', message);
  }
}

export class InvalidMessageError extends CaverError {
  constructor(message: string) {
    super(CaverErrorCode.INVALID_MESSAGE, 'Invalid message error', message);
  }
}
