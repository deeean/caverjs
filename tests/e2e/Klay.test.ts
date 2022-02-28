import Caver, { HttpProvider } from '../../src';

let caver: Caver<HttpProvider>;

beforeEach(() => {
  caver = new Caver(new HttpProvider('http://localhost:8551'));
});

describe('Klay', () => {
  it('call', async () => {
    // await caver.klay.call({
    //   to: '0x0',
    //   data: '',
    // });
  });
});
