import { RpcSignature } from '~/types/Signature';

export interface RpcTransaction {
  blockHash: string;
  blockNumber: string;
  codeFormat?: string;
  feePayer?: string;
  feePayerSignatures?: RpcSignature[];
  feeRatio?: string;
  from: string;
  gas: string | number;
  gasPrice: string | number;
  hash: string;
  humanReadable?: boolean;
  key?: string;
  input?: string;
  nonce: string;
  senderTxHash: string;
  signatures: RpcSignature[];
  to: string | null;
  transactionIndex: string | null;
  type: string;
  typeInt: number;
  value?: string;
}
