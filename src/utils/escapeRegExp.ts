export function escapeRegExp(string: unknown) {
  if (typeof string !== 'string')
    throw new TypeError('Expected a string')

  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')
}
