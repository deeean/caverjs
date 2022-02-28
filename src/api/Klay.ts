import { Provider } from '~/providers/Provider';
import { Block, BlockNumber, CallInput, RpcTransaction, Syncing } from '~/types';
import { Extension } from '~/api/Extension';
import BigNumber from 'bignumber.js';
import * as JsonRpc from '~/jsonrpc';

export class Klay<T extends Provider> extends Extension<T> {
  async getClientVersion() {
    const clientVersion: JsonRpc.JsonRpcResponse<string> = await this.caver.provider.execute('klay_clientVersion', []);
    return clientVersion.result;
  }

  async getProtocolVersion() {
    const protocolVersion: JsonRpc.JsonRpcResponse<string> = await this.caver.provider.execute(
      'klay_protocolVersion',
      [],
    );
    return protocolVersion.result;
  }

  async isMining() {
    const mining: JsonRpc.JsonRpcResponse<boolean> = await this.caver.provider.execute('klay_mining', []);
    return mining.result;
  }

  async isSyncing() {
    const syncing: JsonRpc.JsonRpcResponse<boolean | Syncing> = await this.caver.provider.execute('klay_syncing', []);
    return syncing.result;
  }

  async getGasPrice() {
    const gasPrice: JsonRpc.JsonRpcResponse<string> = await this.caver.provider.execute('klay_gasPrice', []);
    return new BigNumber(gasPrice.result);
  }

  async getAccounts() {
    const accounts: JsonRpc.JsonRpcResponse<Array<string>> = await this.caver.provider.execute('klay_accounts', []);
    return accounts.result;
  }

  async getBlockNumber() {
    const blockNumber: JsonRpc.JsonRpcResponse<string> = await this.caver.provider.execute('klay_blockNumber', []);
    return new BigNumber(blockNumber.result);
  }

  async getBalance(address: string, blockNumber: BlockNumber = 'latest') {
    const balance: JsonRpc.JsonRpcResponse<string> = await this.caver.provider.execute('klay_getBalance', [
      address,
      blockNumber,
    ]);

    return new BigNumber(balance.result);
  }

  async call<T>(input: CallInput, blockNumber: BlockNumber = 'latest') {
    // Transformer.transform(input);
    const call: JsonRpc.JsonRpcResponse<T> = await this.caver.provider.execute('klay_call', [
      input as any,
      blockNumber,
    ]);
    return call.result;
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
