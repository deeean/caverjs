import BigNumber from 'bignumber.js';

export class Transformer {
  static toBigNumber(value: string) {
    return new BigNumber(value);
  }

  static toBigNumbers(values: Array<string>) {
    return values.map(it => Transformer.toBigNumber(it));
  }
}
