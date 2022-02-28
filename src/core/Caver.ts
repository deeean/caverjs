import { Provider } from '~/providers/Provider';
import { Klay, Net } from '~/api';

export class Caver<T extends Provider> {
  provider: T;
  klay: Klay<T>;
  net: Net<T>;

  constructor(provider: T) {
    this.provider = provider;
    this.klay = new Klay(this);
    this.net = new Net(this);
  }
}
