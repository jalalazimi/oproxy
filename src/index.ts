import { string } from './plugins/string';
import { number } from './plugins/number';
import { array } from './plugins/array';
import { boolean } from './plugins/boolean';
import { isSchema } from './utils/isSchema';
import { compose } from './utils/compose';
import { get } from './utils/get';
import { InferType, Schema } from './types';
import { canceledSymbol } from './plugins/core';

function run<T>(src: T, schema: any, schemaObject: any, key: string) {
  const fns = Array.from(schema?.tasks.values());
  const fnsSize = fns.length;
  const val = get(src, schema.key);

  return fnsSize
    ? compose(fns, val, { source: src, schema: schemaObject, key })
    : val;
}

function proxy<T, S>(source: T, schema: InferType<S>): InferType<S> {
  const dist = {} as InferType<S>;

  for (const prop in schema) {
    const value = schema[prop];
    switch (true) {
      case isSchema(value): {
        const result = run<T>(source, value, schema, prop);
        if (result !== canceledSymbol) {
          dist[prop] = result;
        }
        break;
      }
      default: {
        dist[prop] = value;
      }
    }
  }
  return dist;
}

function collectionIterator<T, S>(collection: T[], schema: InferType<S>) {
  return collection.map(obj => {
    return proxy(obj, schema);
  });
}

export function oproxy<T>(source: T, schema: Schema) {
  if (Array.isArray(source)) {
    return collectionIterator(source, schema);
  }
  return proxy(source, schema);
}

export { string, number, array, boolean, InferType };
export default oproxy;
