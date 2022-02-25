export interface Block<TX = string> {
  blockscore: string;
  extraData: string;
  gasUsed: string;
  governanceData: string;
  hash: string;
  logsBloom: string;
  number: string;
  parentHash: string;
  receiptsRoot: string;
  reward: string;
  size: string;
  stateRoot: string;
  timestamp: string;
  timestampFoS: string;
  totalBlockScore: string;
  transactions: TX[];
  transactionsRoot: string;
  voteData: string;
}
