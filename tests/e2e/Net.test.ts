import Caver, { HttpProvider, WebSocketProvider } from '../../src';
import BigNumber from 'bignumber.js';

let http: Caver;
let websocket: Caver;

beforeEach(() => {
  http = new Caver(new HttpProvider('http://localhost:8551'));
  websocket = new Caver(new WebSocketProvider('ws://localhost:8552'));
});

describe('Net', () => {
  describe('http', () => {
    it('getId', async () => {
      const id = await http.rpc.net.getId();

      expect(id).toEqual(1001);
    });

    it('isListening', async () => {
      const isListening = await http.rpc.net.isListening();

      expect(isListening).toEqual(true);
    });

    it('getPeerCount', async () => {
      const getPeerCount = await http.rpc.net.getPeerCount();

      expect(new BigNumber(getPeerCount).toNumber()).toBeGreaterThanOrEqual(1);
    });

    it('getPeerCountByType', async () => {
      const getPeerCountByType = await http.rpc.net.getPeerCountByType();

      expect(getPeerCountByType.pn).toBeGreaterThanOrEqual(0);
      expect(getPeerCountByType.total).toBeGreaterThanOrEqual(0);
    });
  });

  describe('websocket', () => {
    it('getId', async () => {
      const id = await websocket.rpc.net.getId();

      expect(id).toEqual(1001);
    });

    it('isListening', async () => {
      const isListening = await websocket.rpc.net.isListening();

      expect(isListening).toEqual(true);
    });

    it('getPeerCount', async () => {
      const getPeerCount = await websocket.rpc.net.getPeerCount();

      expect(new BigNumber(getPeerCount).toNumber()).toBeGreaterThanOrEqual(1);
    });

    it('getPeerCountByType', async () => {
      const getPeerCountByType = await websocket.rpc.net.getPeerCountByType();

      expect(getPeerCountByType.pn).toBeGreaterThanOrEqual(0);
      expect(getPeerCountByType.total).toBeGreaterThanOrEqual(0);
    });
  });
});
