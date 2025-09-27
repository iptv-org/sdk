export function isNode() {
  return typeof process !== 'undefined' && typeof process.version !== 'undefined'
}
