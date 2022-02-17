import { isObject } from './isObject';

export function isSchema(val: any) {
  return isObject(val) && 'run' in val;
}
