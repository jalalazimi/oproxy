import { compose } from '../utils/compose';

export class Core {
  tasks = new Map();

  _key: string;
  constructor(key: string) {
    if (!key) throw new Error('O: key is required');
    this._key = key;
  }

  run(value: any) {
    return compose(Array.from(this.tasks.values()), value);
  }

  enqueue(name: string, fn: any) {
    this.tasks.set(name, fn);
  }
}
