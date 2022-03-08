import { Transform, Type } from 'class-transformer';
import BigNumber from 'bignumber.js';
import { Transformer } from '~/shared';

export class Block {
  @Type(() => BigNumber)
  @Transform(({ value }) => Transformer.toBigNumber(value))
  blockscore: BigNumber;

  extraData: string;

  @Type(() => BigNumber)
  @Transform(({ value }) => Transformer.toBigNumber(value))
  gasUsed: BigNumber;

  governanceData: string;

  hash: string;

  logsBloom: string;

  @Type(() => BigNumber)
  @Transform(({ value }) => Transformer.toBigNumber(value))
  number: BigNumber;

  parentHash: string;

  receiptsRoot: string;

  reward: string;

  @Type(() => BigNumber)
  @Transform(({ value }) => Transformer.toBigNumber(value))
  size: BigNumber;

  stateRoot: string;

  @Type(() => BigNumber)
  @Transform(({ value }) => Transformer.toBigNumber(value))
  timestamp: BigNumber;

  timestampFoS: string;

  @Type(() => BigNumber)
  @Transform(({ value }) => Transformer.toBigNumber(value))
  totalBlockScore: BigNumber;

  transactions: string[];

  transactionsRoot: string;

  voteData: string;
}
