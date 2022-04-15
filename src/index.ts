import { string } from './plugins/string';
import { number } from './plugins/number';
import { array } from './plugins/array';
import { boolean } from './plugins/boolean';
import { isSchema } from './utils/isSchema';
import { compose } from './utils/compose';
import { get } from './utils/get';
import { InferType, Schema } from './types';
import { cancelSymbol } from './plugins/core';

function run<T>(src: T, schema: any, schemaObject: any, key: string) {
  const fns = Array.from(schema?.tasks.values());
  const fnsSize = fns.length;
  const val = get(src, schema.key);

  return fnsSize
    ? compose(fns, val, { source: src, schema: schemaObject, key })
    : val;
}

function proxy<T, S>(src: T, schema: S): typeof schema {
  const dist = {} as any;

  for (const prop in schema) {
    const value = schema[prop];
    switch (true) {
      case isSchema(value): {
        const result = run<T>(src, value, schema, prop);
        if (result !== cancelSymbol) dist[prop] = result;
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

export { string, number, array, boolean, InferType };
export default oproxy;
