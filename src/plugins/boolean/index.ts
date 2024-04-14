import { BooleanPlugin } from './plugins'

export function boolean(key: string): BooleanPlugin {
  return new BooleanPlugin(key)
}
