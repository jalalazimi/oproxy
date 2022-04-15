
import { Schema } from '../types';

export const compose = <T, V>(
  arr: any[],
  val: V,
  data: { source: unknown; schema: Schema; key: string }
) =>
  arr.reduce((prevValue: T, currentFunc) => {
 return typeof currentFunc === 'function'
      ? currentFunc(prevValue, data)
      : prevValue;
  }, val);
