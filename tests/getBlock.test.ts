// import { Caver } from '~/index';

// import fetch from 'node-fetch';
import cookie from 'fetch-cookie';
// const fetch = cookie(fetch, new cookie.tought)
const f = cookie(fetch);

describe('', () => {
  it('', async () => {
    // const caver = new Caver();
    // console.log(caver);

    const body = {
      id: 1,
      jsonrpc: '2.0',
      method: 'klay_getBlockByNumber',
      params: ['latest', false],
    };

    const response = await f('http://localhost:8551', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // const response2 = await f('http://localhost:8551', {
    //   method: 'POST',
    //   body: JSON.stringify(body),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    // console.log(await response.json());
    console.log(response.headers.get('set-cookie'));

    // console.log(await response.json());
    // console.log(await response2.json());
  });
});
