import { ComposeData } from '../types';

export const compose = <T, V>(arr: any[], val: V, data: ComposeData) =>
  arr.reduce((prevValue: T, currentFunc) => {
    return typeof currentFunc === 'function'
      ? currentFunc(prevValue, data)
      : prevValue;
  }, val);
