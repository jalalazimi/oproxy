import type { ComposeData } from '../types'

export function compose<T, V>(arr: any[], val: V, data: ComposeData) {
  return arr.reduce((prevValue: T, currentFunc) => {
    return typeof currentFunc === 'function'
      ? currentFunc(prevValue, data)
      : prevValue
  }, val)
}
