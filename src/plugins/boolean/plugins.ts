import { Core } from '../core';

export class BooleanPlugin extends Core {
  defaultValue(value: any): BooleanPlugin {
    this.enqueue('defaultValue', (currentValue: any) => {
      if (currentValue === undefined || currentValue === null) {
        return value;
      }
      return currentValue;
    });
    return this;
  }

  toString(): BooleanPlugin {
    this.enqueue('toString', (value: any): string => {
      return value.toString();
    });
    return this;
  }
}
