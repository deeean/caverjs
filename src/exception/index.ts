import ExtendableError from 'extendable-error';

export class CaverError extends ExtendableError {
  constructor(code: number, message: string) {
    super(`Caver error ${code}: ${message}`);
  }
}
