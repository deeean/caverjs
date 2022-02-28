import { Caver, Providers } from '~/index';
import BigNumber from 'bignumber.js';

let caver: Caver<Providers.HttpProvider>;

beforeEach(() => {
  caver = new Caver(new Providers.HttpProvider('http://localhost:8551'));
});

describe('Klay', () => {
  it('getBlockByNumber', async () => {
    const res = await caver.klay.getBlockByNumber(83214240, false);
    const res2 = await caver.klay.getBalance('0xa6D9CC05A0423dBe6E3d7b6e29af87b122355E4E');
    const res3 = await caver.net.getId();
    const res4 = await caver.net.isListening();
    const res5 = await caver.net.getPeerCount();
    const res6 = await caver.net.getPeerCountByType();
    const res7 = await caver.klay.isMining();

    // const res2 = await caver.klay.getBlockByNumber(83214240, true);

    // console.log(res2.div(new BigNumber('10').pow(18)).toString());
    // console.log(res3);
  });
});
