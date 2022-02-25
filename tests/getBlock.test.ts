import { Caver, Providers } from '~/index';

let caver: Caver<Providers.HttpProvider>;

beforeEach(() => {
  caver = new Caver(new Providers.HttpProvider('http://localhost:8551'));
});

describe('Klay', () => {
  it('getBlockByNumber', async () => {
    const res = await caver.klay.getBlockByNumber(83214240, false);

    const res2 = await caver.klay.getBlockByNumber(83214240, true);
  });
});
