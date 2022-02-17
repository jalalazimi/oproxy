import get from 'lodash/get';
import { ArrayPlugin } from './plugins';

class _Array extends ArrayPlugin {
  constructor(key: string) {
    super(key);
  }
  run(obj: any) {
    const array = get(obj, this._key);
    if (!Array.isArray(array)) {
      throw new Error('value is not an array');
    }
    return super.run(array);
  }
}

export function array(key: string): _Array {
  return new _Array(key);
}
