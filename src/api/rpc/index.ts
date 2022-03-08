import { Caver } from '~/core';
import { Klay } from '~/api/rpc/Klay';
import { Net } from '~/api/rpc/Net';

export class Rpc {
  klay: Klay;
  net: Net;

  constructor(caver: Caver) {
    this.klay = new Klay(caver);
    this.net = new Net(caver);
  }
}
