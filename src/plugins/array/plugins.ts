import { Core } from '../core';

export class ArrayPlugin extends Core {
  defaultValue(value: any): ArrayPlugin {
    this.enqueue('defaultValue', (arr: any) => {
      if (arr === undefined || arr === null || arr.length === 0) {
        return value;
      }
      return arr;
    });
    return this;
  }

  chunk(size: number): ArrayPlugin {
    this.enqueue('chunk', (array: any) => {
      return array.reduce((arr: any[], item: any, idx: number) => {
        return idx % size === 0
          ? [...arr, [item]]
          : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
      }, []);
    });
    return this;
  }

  drop(number = 1): ArrayPlugin {
    this.enqueue('drop', (arr: any) => {
      return arr.slice(number);
    });
    return this;
  }

  compact(): ArrayPlugin {
    this.enqueue('compact', (arr: any) => {
      return arr.filter(Boolean);
    });
    return this;
  }

  filter(fn: (item: unknown) => boolean): ArrayPlugin {
    this.enqueue('filter', (arr: any[]) => {
      return arr.filter(fn);
    });
    return this;
  }

  map(
    callbackfn: (value: any, index: number, array: any[]) => any[]
  ): ArrayPlugin {
    this.enqueue('map', (arr: any[]) => {
      return arr.map(callbackfn);
    });
    return this;
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
    this.enqueue('reduce', (arr: any[]) => {
      return arr.reduce(fn, array);
    });
    return this;
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
    this.enqueue('reduceRight', (arr: any[]) => {
      return arr.reduceRight(fn, array);
    });
    return this;
  }

  every(fn: (value: any, index: number, array: any[]) => boolean): ArrayPlugin {
    this.enqueue('every', (arr: any[]): boolean => {
      return arr.every(fn);
    });
    return this;
  }

  sort(
    compareFn?: (firstElement: any, secondElement: any) => number
  ): ArrayPlugin {
    this.enqueue('sort', (arr: any[]): any[] => {
      return arr.sort(compareFn);
    });
    return this;
  }

  includes(searchElement: any, fromIndex?: number): ArrayPlugin {
    this.enqueue('includes', (arr: any[]): boolean => {
      return arr.includes(searchElement, fromIndex);
    });
    return this;
  }

  toString(): ArrayPlugin {
    this.enqueue('includes', (arr: any[]): string => {
      return arr.toString();
    });
    return this;
  }
}
