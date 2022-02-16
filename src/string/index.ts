import { StringPlugins } from './plugins';
import { compose } from '../utils/compose';
import get from 'lodash/get';

class String extends StringPlugins {
  private _key: string;
  constructor(key: string) {
    super();
    if (!key) throw new Error('O: key is required');
    this._key = key;
  }
  run(obj: any) {
    const string = get(obj, this._key).toString();
    return compose(Array.from(this.tasks.values()), string);
  }
}

export function string(key: string): String {
  return new String(key);
}
