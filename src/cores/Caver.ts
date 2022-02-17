import { Klaytn } from '~/cores/Klaytn';

export class Caver {
  klaytn: Klaytn;

  constructor(provider: string) {
    this.klaytn = new Klaytn(this);
  }
}
