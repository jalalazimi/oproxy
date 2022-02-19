import { camelCase } from '../../utils/case';
import { escape } from '../../utils/escape';
import { escapeRegExp } from '../../utils/escapeRegExp';
import { trim, trimEnd, trimStart } from '../../utils/trim';
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
      return camelCase(currentValue);
    });
    return this;
  }

  escape(): StringPlugins {
    this.enqueue('escape', (currentValue: any) => {
      return escape(currentValue);
    });
    return this;
  }

  /**
   * Escapes the RegExp special characters "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "|" in string.
   * @returns {string}
   */
  escapeRegExp(): StringPlugins {
    this.enqueue('escapeRegExp', (currentValue: any) => {
      return escapeRegExp(currentValue);
    });
    return this;
  }

  /**
   * Removes leading and trailing whitespace or specified characters from string.
   * @returns {string}
   */
  trim(): StringPlugins {
    this.enqueue('trim', (currentValue: any) => {
      return trim(currentValue);
    });
    return this;
  }

  /**
   * Removes trailing whitespace or specified characters from string
   * @returns {string}
   */
  trimEnd(): StringPlugins {
    this.enqueue('trimEnd', (currentValue: any) => {
      return trimEnd(currentValue);
    });
    return this;
  }

  /**
   * Removes leading whitespace or specified characters from string.
   * @returns {string}
   */
  trimStart(): StringPlugins {
    this.enqueue('trimStart', (currentValue: any) => {
      return trimStart(currentValue);
    });
    return this;
  }

  replace(str: string | RegExp, newString: any): StringPlugins {
    this.enqueue('replace', (currentValue: any) => {
      return currentValue.replace(str, newString);
    });
    return this;
  }

  toLocaleLowerCase(locale: any): StringPlugins {
    this.enqueue('toLocaleLowerCase', (currentValue: any) => {
      return currentValue.toLocaleLowerCase(locale);
    });
    return this;
  }

  replaceAll(str: string | RegExp, newString: any): StringPlugins {
    this.enqueue('replaceAll', (currentValue: any) => {
      return currentValue.replaceAll(str, newString);
    });
    return this;
  }

  padStart(targetLength: number, padString?: string): StringPlugins {
    this.enqueue('padStart', (currentValue: any) => {
      return currentValue.padStart(targetLength, padString);
    });
    return this;
  }
  
  padEnd(targetLength: number, padString?: string): StringPlugins {
    this.enqueue('padEnd', (currentValue: any) => {
      return String(currentValue).padEnd(targetLength, padString);
    });
    return this;
  }
}
