import { StringPlugins } from './plugins';

export function string(key: string): StringPlugins {
  return new StringPlugins(key);
}
