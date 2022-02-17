export function trim(str: string) {
  if (str.trim) return str.trim();
  return str.replace(/^\s*|\s*$/g, '');
}

export function trimStart(str: string) {
  if (str.trimStart) return str.trimStart();
  return str.replace(/^\s*/, '');
}

export function trimEnd(str: string) {
  if (str.trimEnd) return str.trimEnd();
  return str.replace(/\s*$/, '');
}
