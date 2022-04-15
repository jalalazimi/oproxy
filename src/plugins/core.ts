export const cancelSymbol = Symbol('cancel');
export class Core {
  name = 'schema'
  tasks = new Map();
  key: string;
  
  constructor(key?: string) {
    this.key = key ?? '';
  }

  enqueue(name: string, fn: any) {
    this.tasks.set(name+ new Date().getMilliseconds, fn);
    return this
  }
}
