# caverjs (Unofficial, WIP)
> 🚨 경고: 이 라이브러리는 완벽하지 않습니다.

[caver-js](https://github.com/klaytn/caver-js) 를 가볍게 개선한 라이브러리 입니다.

## Usage
```typescript
import Caver, { HttpProvider } from '@margintop3498/caverjs';

const caver = new Caver(new HttpProvider('http://localhost:8551'));

await caver.rpc.klay.getBlockNumber();

await caver.rpc.net.getId();
```