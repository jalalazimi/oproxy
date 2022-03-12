import { string } from './plugins/string';
import { number } from './plugins/number';
import { array } from './plugins/array';
import { boolean } from './plugins/boolean';
import { isSchema } from './utils/isSchema';
import { compose } from './utils/compose';
import { expr } from './utils/expr';
import { isExpr } from './utils/isExpr';
import { get } from './utils/get';

export interface Schema {
  [key: string]: any;
}

function run<T>(src: T, schema: Schema) {
  const fns = Array.from(schema?.tasks.values());
  const fnsSize = fns.length;
  const val = isExpr(schema.key)
    ? expr(schema.key, src, schema.name === 'string')
    : get(src, schema.key);

  return fnsSize ? compose(fns, val) : val;
}

function proxy<T, S>(src: T, schema: S) {
  const dist = {} as Record<keyof S, unknown>;

  for (const prop in schema) {
    const value = schema[prop];
    switch (true) {
      case isSchema(value): {
        dist[prop] = run(src, value);
        break;
      }
      default: {
        dist[prop] = value;
      }
    }
  }
  return dist;
}

function collectionIterator<T, S>(collection: T[], schema: S) {
  return collection.map(obj => {
    return proxy(obj, schema);
  });
}

export function oproxy<T>(src: T, schema: Schema) {
  if (Array.isArray(src)) {
    return collectionIterator(src, schema);
  }
  return proxy(src, schema);
}

export { string, number, array, boolean };
export default oproxy;
