import { string } from './plugins/string';
import { number } from './plugins/number';
import { array } from './plugins/array';
import { boolean } from './plugins/boolean';
import { id } from './plugins/id';
import { isObject } from './utils/isObject';

export function oproxy(src: any, schema: any) {
  const dist: any = {};
  for (const prop in schema) {
    const value = schema[prop];

    switch (true) {
      case isObject(value) && 'run' in value: {
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

export { string, number, array, boolean, id };
export default oproxy;
