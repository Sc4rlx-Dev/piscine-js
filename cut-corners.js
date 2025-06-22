export function trunc(n) {
  if (n > 0) {
    let i = 0;
    while (i + 1 <= n) {
      i = i + 1;
    }
    return i;
  }
  let i = 0;
  while (i - 1 >= n) {
    i = i - 1;
  }
  return i;
}

export function floor(n) {
  const tr = trunc(n);
  if (n < 0 && n !== tr) {
    return tr - 1;
  }
  return tr;
}

export function ceil(n) {
  const tr = trunc(n);
  if (n > 0 && n !== tr) {
    return tr + 1;
  }
  return tr;
}

export function round(n) {
  if (n < 0 && n + 0.5 === 0) {
    return 0;
  }
  return floor(n + 0.5);
}
