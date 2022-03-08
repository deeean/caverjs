import { Caver } from '~/core';

export class Net {
  caver: Caver;

  constructor(caver: Caver) {
    this.caver = caver;
  }

  async getId() {
    return await this.caver.provider.execute<number>('net_networkID', []);
  }

  async isListening() {
    return await this.caver.provider.execute<boolean>('net_listening', []);
  }

  async getPeerCount() {
    return await this.caver.provider.execute<number>('net_peerCount', []);
  }

  async getPeerCountByType() {
    return await this.caver.provider.execute<{ en?: number; pn?: number; total: number }>('net_peerCountByType', []);
  }
}
