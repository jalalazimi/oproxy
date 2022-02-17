import { string } from './plugins/string';
import { number } from './plugins/number';
import { array } from './plugins/array';
import { boolean } from './plugins/boolean';
import { id } from './plugins/id';
import { isSchema } from './utils/isSchema';

function proxy(src: any, schema: any) {
  const dist: any = {};

  for (const prop in schema) {
    const value = schema[prop];
    switch (true) {
      case isSchema(value): {
        dist[prop] = value.run(src);
        break;
      }
      default: {
        dist[prop] = value;
      }
    }
  }
  return dist;
}

function arrayProxy(array: any[], schema: any) {
  return array.map(arr => {
    return proxy(arr, schema);
  });
}

export function oproxy(src: any, schema: any) {
  if (Array.isArray(src)) {
    return arrayProxy(src, schema);
  }
  return proxy(src, schema);
}

export { string, number, array, boolean, id };
export default oproxy;
