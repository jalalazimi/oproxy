import { NumberPlugins } from './plugins/number/plugins';
import { StringPlugins } from './plugins/string/plugins';
import { BooleanPlugin } from './plugins/boolean/plugins';
import { ArrayPlugin } from './plugins/array/plugins';

export type AnyObject = { [k: string]: any };
export type Flags = 's' | 'd' | '';

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
};

export type Schema = AnyObject & { recursive?: boolean };