import { NumberPlugins } from './plugins';
import { compose } from '../utils/compose';

class _Number extends NumberPlugins {
  private _key: string;
  constructor(key: string) {
    super();
    if (!key) throw new Error('key is required');
    this._key = key;
  }
  run(obj: any) {
    const number = Number(obj[this._key]);
    if (isNaN(number)) throw new Error('value is not a number');
    return compose(Array.from(this.tasks.values()), number);
  }
}

export function number(key: string): _Number {
  return new _Number(key);
}
