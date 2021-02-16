const f = (arr, l, r) => {
  let res = [];
  for (let i = 0; i < l.length; i++) {
    const low = l[i];
    const high = r[i];
    if (low > high) {
      res.push(false);
      continue;
    }
    const newArr = arr.slice(low, high + 1).sort((a, b) => a - b);
    let ok = true;
    if (newArr.length < 2) {
      res.push(false);
      continue;
    }
    const d = newArr[0] - newArr[1];
    for (let j = 0; j < newArr.length - 1; j++) {
      if (newArr[j] - newArr[j + 1] !== d) {
        ok = false;
        break;
      }
    }
    res.push(ok);
  }
  return res;
};

console.log(f([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]));
console.log(
  f(
    [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
    [0, 1, 6, 4, 8, 7],
    [4, 4, 9, 7, 9, 10]
  )
);
