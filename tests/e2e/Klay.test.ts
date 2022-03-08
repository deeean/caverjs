import Caver, { HttpProvider } from '../../src';

let caver: Caver;

beforeEach(() => {
  caver = new Caver(new HttpProvider('http://localhost:8551'));
});

describe('Klay', () => {
  it('call', async () => {});
});
