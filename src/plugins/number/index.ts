import get from 'lodash/get';
import { expr } from '../../utils/expr';
import { isExpr } from '../../utils/isExpr';
import { NumberPlugins } from './plugins';

class _Number extends NumberPlugins {
  constructor(key: string) {
    super(key);
  }

  run(obj: any) {
    const key = this._key;

    if (isExpr(key)) {
      const val = expr(key, obj);
      return super.run(Number(val));
    }

    const number = Number(get(obj, key));
    if (isNaN(number)) throw new Error('value is not a number');
    return super.run(number);
  }
}

export function number(key: string): _Number {
  return new _Number(key);
}
