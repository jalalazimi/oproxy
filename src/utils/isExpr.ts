const regex = /[^{}]+(?=})/g;

export function isExpr(value: any): boolean {
  return regex.test(value);
}
