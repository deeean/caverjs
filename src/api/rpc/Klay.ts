import { Block, BlockNumber, CallInput, Syncing } from '~/types';
import { Caver } from '~/core';

export class Klay {
  caver: Caver;

  constructor(caver: Caver) {
    this.caver = caver;
  }

  async getClientVersion() {
    return await this.caver.provider.execute<string>('klay_clientVersion', []);
  }

  async getProtocolVersion() {
    return await this.caver.provider.execute<string>('klay_protocolVersion', []);
  }

  async isMining() {
    return await this.caver.provider.execute<boolean>('klay_mining', []);
  }

  async isSyncing() {
    return await this.caver.provider.execute<boolean | Syncing>('klay_syncing', []);
  }

  async getGasPrice() {
    return await this.caver.provider.execute<string>('klay_gasPrice', []);
  }

  async getAccounts() {
    return await this.caver.provider.execute<Array<string>>('klay_accounts', []);
  }

  async getBlockNumber() {
    return await this.caver.provider.execute<string>('klay_blockNumber', []);
  }

  async getBalance(address: string, blockNumber: BlockNumber = 'latest') {
    return await this.caver.provider.execute<string>('klay_getBalance', [address, blockNumber]);
  }

  async call<T>(input: CallInput, blockNumber: BlockNumber = 'latest') {}

  async getBlockByNumber(blockNumber: BlockNumber, withTransactions: boolean = false): Promise<Block> {
    return await this.caver.provider.executeWithTransform(Block, 'klay_getBlockByNumber', [
      blockNumber,
      withTransactions,
    ]);
  }

  async getLatestBlock() {
    return this.getBlockByNumber('latest');
  }
}
