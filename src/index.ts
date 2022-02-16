import { string } from './string';
import { number } from './number';

export function oproxy(src: any, schema: any) {
  const dist: any = {};
  for (const prop in schema) {
    dist[prop] = schema[prop].run(src);
  }
  return dist;
}

export { string, number };
export default oproxy;
