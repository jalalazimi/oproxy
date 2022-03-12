export const compose = <T>(arr: any[], val: T) =>
  arr.reduce((prevValue: T, currentFunc) => {
    return typeof currentFunc === 'function'
      ? currentFunc(prevValue)
      : prevValue;
  }, val);
