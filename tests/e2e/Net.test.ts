import Caver, { HttpProvider } from '../../src';

let caver: Caver<HttpProvider>;

beforeEach(() => {
  caver = new Caver(new HttpProvider('http://localhost:8551'));
});

describe('Net', () => {
  it('getId', async () => {
    const id = await caver.net.getId();

    expect(id).toEqual(1001);
  });

  it('isListening', async () => {
    const isListening = await caver.net.isListening();

    expect(isListening).toEqual(true);
  });

  it('getPeerCount', async () => {
    const getPeerCount = await caver.net.getPeerCount();

    expect(getPeerCount.toNumber()).toBeGreaterThanOrEqual(1);
  });

  it('getPeerCountByType', async () => {
    const getPeerCountByType = await caver.net.getPeerCountByType();

    expect(getPeerCountByType.pn).toBeGreaterThanOrEqual(0);
    expect(getPeerCountByType.en).toBeGreaterThanOrEqual(0);
    expect(getPeerCountByType.total).toBeGreaterThanOrEqual(0);
  });
});
