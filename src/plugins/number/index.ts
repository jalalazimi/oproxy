import { NumberPlugins } from './plugins';

export function number(key: string): NumberPlugins {
  return new NumberPlugins(key);
}
