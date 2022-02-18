export interface HttpProviderOptions {
  // timeout?: number;
  // headers?: HeadersInit;
}

export class HttpProvider {
  public baseURL: string;
  // public timeout?: number;
  // public headers?: Array<{ name: string; value: string }>;

  constructor(baseURL: string, options: HttpProviderOptions = {}) {
    this.baseURL = baseURL;
    // this.timeout = options.timeout || 0;
    // this.headers = options.headers || [];

    // fetch()
  }

  public async fetch<T extends unknown>(payload: T): Promise<Response> {
    return fetch(this.baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }
}
