import { StringPlugins } from './plugins';
import get from 'lodash/get';
import { isExpr } from '../../utils/isExpr';
import { expr } from '../../utils/expr';

class _String extends StringPlugins {
  constructor(key: string) {
    super(key);
  }
  run(obj: any) {
    const key = this._key;

    if (isExpr(key)) {
      const val = expr(key, obj, true);
      return super.run(String(val));
    }

    const string = String(get(obj, this._key, ''));
    return super.run(string);
  }
}

export function string(key: string): _String {
  return new _String(key);
}
