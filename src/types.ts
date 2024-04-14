import type { NumberPlugins } from './plugins/number/plugins'
import type { StringPlugins } from './plugins/string/plugins'
import type { BooleanPlugin } from './plugins/boolean/plugins'
import type { ArrayPlugin } from './plugins/array/plugins'

export interface AnyObject { [k: string]: any }

type MapObjectIdToString<PropType> = PropType extends StringPlugins
  ? string
  : PropType extends NumberPlugins
    ? number
    : PropType extends BooleanPlugin
      ? boolean
      : PropType extends ArrayPlugin
        ? Array<unknown>
        : PropType

export type InferType<T> = {
  [PropertyKey in keyof T]: MapObjectIdToString<T[PropertyKey]>;
}

export type Schema = AnyObject & Options
export interface Options {
  /** Iterate over the object recursively */
  recursive?: boolean
}

export interface ComposeData { source: unknown, schema: Schema, key: string }
