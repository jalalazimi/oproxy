import { isObject } from './isObject';

export function isSchema(val: any) {
  return isObject(val) && 'name' in val;
}
