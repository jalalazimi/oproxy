import { Plugins } from './plugin';
import { compose } from './utils/compose';

class _O extends Plugins {
  private _key: string;
  constructor(key: string) {
    super();
    if (!key) throw new Error('O: key is required');
    this._key = key;
  }
  run(obj: any) {
    return compose(Array.from(this.tasks.values()), obj[this._key]);
  }
}

export function O(key: string): _O {
  return new _O(key);
}
