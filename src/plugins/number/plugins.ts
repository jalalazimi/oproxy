import { Core } from '../core';

export class NumberPlugins extends Core {
  name = 'number';
  constructor(key: string) {
    super(key);
    this.toNumber();
  }

  toNumber(): this {
    return this.enqueue('toNumber', (currentValue?: any) => {
      if (typeof currentValue === 'number') {
        return currentValue;
      }
      return Number(currentValue);
    });
  }

  defaultValue(value: unknown): NumberPlugins {
    return this.enqueue('defaultValue', (currentValue: any) => {
      if (isNaN(currentValue)) {
        return value;
      }
      return currentValue;
    });
  }
}
