import { ComposeData } from '../../types';
import { Core } from '../core';

export class NumberPlugins extends Core {
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

  formatter(cb: (value: number, data: unknown) => number): this {
    return this.enqueue('numberFormatter', (value: number, data: ComposeData) => {
      return cb(value, data.source);
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
