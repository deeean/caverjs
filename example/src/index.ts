import Caver, { WebSocketProvider } from "caverjs";


async function bootstrap() {
  const caver = new Caver(new WebSocketProvider('ws://localhost:8552'));
}

bootstrap();