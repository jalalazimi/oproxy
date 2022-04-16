import type { ComposeData } from '../../types';
import { camelCase } from '../../utils/case';
import { escape } from '../../utils/escape';
import { escapeRegExp } from '../../utils/escapeRegExp';
import { trim, trimEnd, trimStart } from '../../utils/trim';
import { Core } from '../core';

export class StringPlugins extends Core {
  constructor(key?: string) {
    super(key);
    this.toString();
  }

  formatter(cb: (value: string, data: unknown) => string): this {
    return this.enqueue('stringFormatter', (value: any, data: ComposeData) => {
      return String(cb(value, data.source));
    });
  }

  toString(): this {
    return this.enqueue('toString', (currentValue?: any) => {
      if (typeof currentValue === 'string') {
        return currentValue;
      }
      if ([null, undefined].includes(currentValue)) {
        return '';
      }
      return String(currentValue);
    });
  }

  defaultValue(value: string): this {
    return this.enqueue('defaultValue', (currentValue: string) => {
      if (Boolean(currentValue) === false) {
        return value;
      }
      return currentValue;
    });
  }

  /**
   * Convert to upper case
   * @returns {string}
   * @example
   * O('name').upperCase(); // 'VALUE'
   */
  upperCase(): this {
    return this.enqueue('upperCase', (currentValue: string) => {
      return currentValue.toUpperCase();
    });
  }

  lowerCase(): this {
    return this.enqueue('lowerCase', (currentValue: string) => {
      return currentValue.toLowerCase();
    });
  }

  /**
   * Convert to camelCase
   * @returns {string}
   */
  camelCase(): this {
    return this.enqueue('camelCase', (currentValue: string) => {
      return camelCase(currentValue);
    });
  }

  escape(): this {
    return this.enqueue('escape', (currentValue: string) => {
      return escape(currentValue);
    });
  }

  /**
   * Escapes the RegExp special characters "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in string.
   * @returns {string}
   */
  escapeRegExp(): this {
    return this.enqueue('escapeRegExp', (currentValue: string) => {
      return escapeRegExp(currentValue);
    });
  }

  /**
   * Removes leading and trailing whitespace or specified characters from string.
   * @returns {string}
   */
  trim(): this {
    return this.enqueue('trim', (currentValue: string) => {
      return trim(currentValue);
    });
  }

  /**
   * Removes trailing whitespace or specified characters from string
   * @returns {string}
   */
  trimEnd(): this {
    return this.enqueue('trimEnd', (currentValue: string) => {
      return trimEnd(currentValue);
    });
  }

  /**
   * Removes leading whitespace or specified characters from string.
   * @returns {string}
   */
  trimStart(): this {
    return this.enqueue('trimStart', (currentValue: string) => {
      return trimStart(currentValue);
    });
  }

  replace(str: string | RegExp, newString: any): this {
    return this.enqueue('replace', (currentValue: string) => {
      return currentValue.replace(str, newString);
    });
  }

  toLocaleLowerCase(locale: any): this {
    return this.enqueue('toLocaleLowerCase', (currentValue: string) => {
      return currentValue.toLocaleLowerCase(locale);
    });
  }

  replaceAll(str: string | RegExp, newString: any): this {
    return this.enqueue('replaceAll', (currentValue: string) => {
      return currentValue.replaceAll(str, newString);
    });
  }

  padStart(targetLength: number, padString?: string): this {
    return this.enqueue('padStart', (currentValue: string) => {
      return currentValue.padStart(targetLength, padString);
    });
  }

  padEnd(targetLength: number, padString?: string): StringPlugins {
    return this.enqueue('padEnd', (currentValue: string) => {
      return String(currentValue).padEnd(targetLength, padString);
    });
  }
}
