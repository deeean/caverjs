# caverjs (Unofficial, WIP)
> 🚨 경고: 이 라이브러리는 완벽하지 않습니다.

[caver-js](https://github.com/klaytn/caver-js) 를 가볍게 개선한 라이브러리 입니다.

## Usage
```typescript
const caver = new Caver(new Providers.HttpProvider('http://localhost:8551'));

await caver.klay.getBlockNumber();

await caver.net.getId();
```