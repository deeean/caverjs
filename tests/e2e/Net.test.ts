import Caver, { HttpProvider, WebSocketProvider } from '../../src';

let http: Caver<HttpProvider>;
let websocket: Caver<WebSocketProvider>;

beforeEach(() => {
  http = new Caver(new HttpProvider('http://localhost:8551'));
  websocket = new Caver(new WebSocketProvider('ws://localhost:8551'));
});

describe('Net', () => {
  describe('http', () => {
    it('getId', async () => {
      const id = await http.net.getId();

      expect(id).toEqual(1001);
    });

    it('isListening', async () => {
      const isListening = await http.net.isListening();

      expect(isListening).toEqual(true);
    });

    it('getPeerCount', async () => {
      const getPeerCount = await http.net.getPeerCount();

      expect(getPeerCount.toNumber()).toBeGreaterThanOrEqual(1);
    });

    it('getPeerCountByType', async () => {
      const getPeerCountByType = await http.net.getPeerCountByType();

      expect(getPeerCountByType.pn).toBeGreaterThanOrEqual(0);
      expect(getPeerCountByType.en).toBeGreaterThanOrEqual(0);
      expect(getPeerCountByType.total).toBeGreaterThanOrEqual(0);
    });
  });

  describe('websocket', () => {
    it('getId', async () => {
      const id = await websocket.net.getId();

      expect(id).toEqual(1001);
    });

    it('isListening', async () => {
      const isListening = await websocket.net.isListening();

      expect(isListening).toEqual(true);
    });

    it('getPeerCount', async () => {
      const getPeerCount = await websocket.net.getPeerCount();

      expect(getPeerCount.toNumber()).toBeGreaterThanOrEqual(1);
    });

    it('getPeerCountByType', async () => {
      const getPeerCountByType = await websocket.net.getPeerCountByType();

      expect(getPeerCountByType.pn).toBeGreaterThanOrEqual(0);
      expect(getPeerCountByType.en).toBeGreaterThanOrEqual(0);
      expect(getPeerCountByType.total).toBeGreaterThanOrEqual(0);
    });
  });
});
