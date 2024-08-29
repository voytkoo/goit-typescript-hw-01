function merge<T extends Record<string, any>, U extends Record<string, any>>(
  objA: T,
  objB: U
): T & U {
  return Object.assign({}, objA, objB);
}
