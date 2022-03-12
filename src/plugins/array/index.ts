import { ArrayPlugin } from './plugins';

export function array(key: string): ArrayPlugin {
  return new ArrayPlugin(key);
}
