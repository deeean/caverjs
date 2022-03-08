export class Deferred<T = unknown> {
  promise: Promise<T>;
  resolve: (...args: Array<unknown>) => void;
  reject: (...args: Array<unknown>) => void;

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
