import { Core } from '../core';

export class ArrayPlugin extends Core {
  name = 'array';

  defaultValue(value: any): ArrayPlugin {
    return this.enqueue('defaultValue', <T>(arr: T[]) => {
      if (arr === undefined || arr === null || arr.length === 0) {
        return value;
      }
      return arr;
    });
  }

  chunk(size: number): ArrayPlugin {
    return this.enqueue('chunk', <T>(array: T[]) => {
      return array.reduce((arr: any[], item: any, idx: number) => {
        return idx % size === 0
          ? [...arr, [item]]
          : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
      }, []);
    });
  }

  drop(number = 1): ArrayPlugin {
    return this.enqueue('drop', <T>(arr: T[]) => {
      return arr.slice(number);
    });
  }

  compact(): ArrayPlugin {
    return this.enqueue('compact', <T>(arr: T[]) => {
      return arr.filter(Boolean);
    });
  }

  filter(fn: (item: unknown) => boolean): ArrayPlugin {
    return this.enqueue('filter', <T>(arr: T[]) => {
      return arr.filter(fn);
    });
  }

  map(
    callbackfn: (value: any, index: number, array: any[]) => any[]
  ): ArrayPlugin {
    return this.enqueue('map', <T>(arr: T[]) => {
      return arr.map(callbackfn);
    });
  }

  reduce(
    fn: (
      previousValue: any,
      currentValue: any,
      currentIndex: number,
      array: any[]
    ) => any,
    array: any
  ): ArrayPlugin {
    return this.enqueue('reduce', <T>(arr: T[]) => {
      return arr.reduce(fn, array);
    });
  }

  reduceRight(
    fn: (
      previousValue: any,
      currentValue: any,
      currentIndex: number,
      array: any[]
    ) => any,
    array: any
  ): ArrayPlugin {
    return this.enqueue('reduceRight', <T>(arr: T[]) => {
      return arr.reduceRight(fn, array);
    });
  }

  every(fn: (value: any, index: number, array: any[]) => boolean): ArrayPlugin {
    return this.enqueue('every', <T>(arr: T[]): boolean => {
      return arr.every(fn);
    });
  }

  sort(
    compareFn?: (firstElement: any, secondElement: any) => number
  ): ArrayPlugin {
    return this.enqueue('sort', <T>(arr: T[]): T[] => {
      return arr.sort(compareFn);
    });
  }

  includes(searchElement: any, fromIndex?: number): ArrayPlugin {
    return this.enqueue('includes', <T>(arr: T[]): boolean => {
      return arr.includes(searchElement, fromIndex);
    });
  }

  toString(): ArrayPlugin {
    return this.enqueue('includes', <T>(arr: T[]): string => {
      return arr.toString();
    });
  }
}
