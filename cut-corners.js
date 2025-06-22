function trunc(n) {
  if (n === 0) {return 0};
  let res = 0, step = 1;
  
  if (n > 0) {
    while (res + step <= n) {
      step = step * 2;
    }
    // console.log(res + step)
    while (step >= 1) {
      if (res + step <= n) {
        res = res + step;
      }
      step = step / 2;
    }
  } else {
    while (res - step >= n) {
      step = step * 2;
    }
    
    while (step >= 1) {
      if (res - step >= n) {
        res = res - step;
      }
      step = step / 2;
    }
  }
  return res;
}

function floor(n) {
  const tr = trunc(n);
  if (n < 0 && n !== tr) {
    return tr - 1;
  }
  return tr;
}

function ceil(n) {
  const tr = trunc(n);
  if (n > 0 && n !== tr) {
    return tr + 1;
  }
  return tr;
}
// // nums.map(ceil), [4, -3, 3, -2, 0]

function round(n) {
  return floor(n + 0.5);
}

// // const nums = [3.7, -3.7, 3.1, -3.1]
// // console.log(nums.map(round))
// // console.log(nums.map(floor))
// // console.log(nums.map(trunc))
// // console.log(nums.map(ceil))