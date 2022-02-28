import { Provider } from '~/providers/Provider';
import { Caver } from '~/core';

export class Extension<T extends Provider> {
  protected caver: Caver<T>;

  constructor(caver: Caver<T>) {
    this.caver = caver;
  }
}
