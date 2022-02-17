import { Core } from '../core';

export class NumberPlugins extends Core {
  defaultValue(value: any): NumberPlugins {
    this.enqueue('defaultValue', (currentValue: any) => {
      if (currentValue === undefined || currentValue === null) {
        return value;
      }
      return currentValue;
    });
    return this;
  }
}
