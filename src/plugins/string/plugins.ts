import _camelCase from 'lodash/camelCase';
import _escape from 'lodash/escape';
import _escapeRegExp from 'lodash/escapeRegExp';
import _trim from 'lodash/trim';
import _trimEnd from 'lodash/trimEnd';
import _trimStart from 'lodash/trimStart';
import { Core } from '../core';

export class StringPlugins extends Core {
  defaultValue(value: any): StringPlugins {
    this.enqueue('defaultValue', (currentValue: any) => {
      if (Boolean(currentValue) === false) {
        return value;
      }
      return currentValue;
    });
    return this;
  }

  /**
   * Convert to upper case
   * @returns {string}
   * @example
   * O('name').upperCase(); // 'VALUE'
   */
  upperCase(): StringPlugins {
    this.enqueue('upperCase', (currentValue: any) => {
      return String(currentValue).toUpperCase();
    });
    return this;
  }

  lowerCase(): StringPlugins {
    this.enqueue('lowerCase', (currentValue: any) => {
      return String(currentValue).toLowerCase();
    });
    return this;
  }

  /**
   * Convert to camelCase
   * @returns {string}
   */
  camelCase(): StringPlugins {
    this.enqueue('camelCase', (currentValue: any) => {
      return _camelCase(currentValue);
    });
    return this;
  }

  escape(): StringPlugins {
    this.enqueue('escape', (currentValue: any) => {
      return _escape(currentValue);
    });
    return this;
  }

  /**
   * Escapes the RegExp special characters "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in string.
   * @returns {string}
   */
  escapeRegExp(): StringPlugins {
    this.enqueue('escapeRegExp', (currentValue: any) => {
      return _escapeRegExp(currentValue);
    });
    return this;
  }

  /**
   * Removes leading and trailing whitespace or specified characters from string.
   * @returns {string}
   */
  trim(): StringPlugins {
    this.enqueue('trim', (currentValue: any) => {
      return _trim(currentValue);
    });
    return this;
  }

  /**
   * Removes trailing whitespace or specified characters from string
   * @param chars Characters to trim
   * @returns {string}
   */
  trimEnd(chars?: string): StringPlugins {
    this.enqueue('trimEnd', (currentValue: any) => {
      return _trimEnd(currentValue, chars);
    });
    return this;
  }

  /**
   * Removes leading whitespace or specified characters from string.
   * @param chars Characters to trim
   * @returns {string}
   */
  trimStart(chars?: string): StringPlugins {
    this.enqueue('trimStart', (currentValue: any) => {
      return _trimStart(currentValue, chars);
    });
    return this;
  }
}
