export class Core {
  name = 'schema'
  tasks = new Map();
  key: string;
  
  constructor(key: string) {
    if (!key) throw new Error('O: key is required');
    this.key = key;
  }

  enqueue(name: string, fn: any) {
    this.tasks.set(name, fn);
    return this
  }
}
