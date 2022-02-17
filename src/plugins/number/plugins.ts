import _camelCase from 'lodash/camelCase';
import _escape from 'lodash/escape';
import _escapeRegExp from 'lodash/escapeRegExp';
import _trim from 'lodash/trim';
import _trimEnd from 'lodash/trimEnd';
import _trimStart from 'lodash/trimStart';
import { Core } from '../core';

export class NumberPlugins extends Core {
  value(): NumberPlugins {
    this.enqueue('value', (value: any): number => {
      return value;
    });
    return this;
  }

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
