import { Provider } from '~/providers/Provider';
import { Extension } from '~/api/Extension';
import * as JsonRpc from '~/jsonrpc';
import BigNumber from 'bignumber.js';

export class Net<T extends Provider> extends Extension<T> {
  async getId() {
    const id: JsonRpc.JsonRpcResponse<number> = await this.caver.provider.execute('net_networkID', []);
    return id.result;
  }

  async isListening() {
    const listening: JsonRpc.JsonRpcResponse<boolean> = await this.caver.provider.execute('net_listening', []);
    return listening.result;
  }

  async getPeerCount() {
    const peerCount: JsonRpc.JsonRpcResponse<number> = await this.caver.provider.execute('net_peerCount', []);
    return new BigNumber(peerCount.result);
  }

  async getPeerCountByType() {
    const peerCountByType: JsonRpc.JsonRpcResponse<{ en: number; pn: number; total: number }> =
      await this.caver.provider.execute('net_peerCountByType', []);
    return peerCountByType.result;
  }
}
