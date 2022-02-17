import { get } from '../../utils/get';
import { IdPlugin } from './plugins';
import { v4 } from 'uuid';

class _Id extends IdPlugin {
  run(obj: any) {
    const key = this._key;
    const id = get(obj, key, v4());
    return super.run(id);
  }
}

export function id(key = Symbol('unset').toString()): _Id {
  return new _Id(key);
}
