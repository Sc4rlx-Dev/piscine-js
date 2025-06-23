function get(src, path) {
  const keys = path.split('.');
  let c = src;
  for (const key of keys) {
    if (c === null || c === undefined) {
      return undefined;
    }
    c = c[key];
  }
  return c;
}

