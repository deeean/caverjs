import Caver, { HttpProvider } from 'caverjs';

async function bootstrap() {
  const caver = new Caver(new HttpProvider('http://localhost:8551'));
  await caver.rpc.klay.getBlockNumber();
}

bootstrap();
