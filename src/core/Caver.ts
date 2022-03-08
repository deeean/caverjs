import { HttpProvider, WebSocketProvider } from '~/providers';
import { Rpc } from '~/api';

export class Caver {
  provider: HttpProvider | WebSocketProvider;
  rpc: Rpc;

  constructor(provider: string | HttpProvider | WebSocketProvider) {
    if (typeof provider === 'string') {
      if (provider.startsWith('http')) {
        return new Caver(new HttpProvider(provider));
      } else if (provider.startsWith('ws')) {
        return new Caver(new WebSocketProvider(provider));
      } else {
        throw new Error(`Unexpected provider rawurl: ${provider}`);
      }
    } else {
      this.provider = provider;
    }

    this.rpc = new Rpc(this);
  }
}
