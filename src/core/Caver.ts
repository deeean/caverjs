import { Provider } from '~/providers/Provider';
import { Klay } from '~/api';

export class Caver<T extends Provider> {
  provider: T;
  klay: Klay<T>;

  constructor(provider: T) {
    this.provider = provider;
    this.klay = new Klay(this);
  }
}
