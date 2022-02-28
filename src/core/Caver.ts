import { Provider } from '~/providers/Provider';
import { Klay, Net } from '~/api';
import { HttpProvider } from '~/providers';

export class Caver<T extends Provider> {
  static create(rawurl: string) {
    if (rawurl.startsWith('http')) {
      return new Caver(new HttpProvider(rawurl));
    } else {
      throw new Error(`Unexpected rawurl: ${rawurl}`);
    }
  }

  provider: T;
  klay: Klay<T>;
  net: Net<T>;

  constructor(provider: T) {
    this.provider = provider;
    this.klay = new Klay(this);
    this.net = new Net(this);
  }
}
