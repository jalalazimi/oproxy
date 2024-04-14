export const canceledSymbol = Symbol('canceled')
export class Core {
  tasks = new Map()
  key: string

  constructor(key?: string) {
    this.key = key ?? ''
  }

  enqueue(name: string, fn: any) {
    this.tasks.set(name, fn)
    return this
  }
}
