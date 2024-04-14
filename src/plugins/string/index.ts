import { StringPlugins } from './plugins'

export function string(key?: string): InstanceType<typeof StringPlugins> {
  return new StringPlugins(key)
}
