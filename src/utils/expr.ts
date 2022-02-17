import get from 'lodash/get';

function parse(str: string) {
  return Function(`'use strict'; return (${str})`)();
}

export function expr(str: string, obj: any, raw: boolean = false) {
  const match = str.match(/{([^}]+)}/gi);
  if (match) {
    match.forEach((item: string) => {
      const key = item.replace(/{|}/gi, '');
      str = str.replace(item, get(obj, key));
    });
    return raw ? str : parse(str);
  }
  return null;
}
