import { Caver } from '~/core';
import { Provider } from '~/providers/Provider';
import { Block, BlockNumber, RpcTransaction } from '~/types';
import * as JsonRpc from '~/jsonrpc';

export class Klay<T extends Provider> {
  private caver: Caver<T>;

  constructor(caver: Caver<T>) {
    this.caver = caver;
  }

  async getBlockByNumber(blockNumber: BlockNumber, withTransactions?: false): Promise<Block>;
  async getBlockByNumber(blockNumber: BlockNumber, withTransactions?: true): Promise<Block<RpcTransaction>>;
  async getBlockByNumber(
    blockNumber: BlockNumber,
    withTransactions: boolean = false,
  ): Promise<Block | Block<RpcTransaction>> {
    const block: JsonRpc.JsonRpcResponse<Block> = await this.caver.provider.execute('klay_getBlockByNumber', [
      blockNumber,
      withTransactions,
    ]);

    return block.result;
  }
}
