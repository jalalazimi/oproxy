import { Core } from '../plugins/core'
import { isObject } from './isObject'

export function isSchema(val: any) {
  return isObject(val) && val instanceof Core
}
