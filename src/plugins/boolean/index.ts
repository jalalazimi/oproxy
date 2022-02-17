import { expr } from '../../utils/expr';
import { get } from '../../utils/get';
import { isExpr } from '../../utils/isExpr';
import { BooleanPlugin } from './plugins';

class _Boolean extends BooleanPlugin {
  run(obj: any) {
    const key = this._key;

    if (isExpr(key)) {
      const val = expr(key, obj);
      return super.run(Boolean(val));
    }

    const bool = Boolean(get(obj, key));
    return super.run(bool);
  }
}

export function boolean(key: string): _Boolean {
  return new _Boolean(key);
}
