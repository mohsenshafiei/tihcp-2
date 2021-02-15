const f = (arr) => {
  const sorted = arr.sort((a, b) => a[0] - b[0]);
  let max = 0;
  for (let i = 0; i < sorted.length - 1; i++) {
    const d = sorted[i + 1][0] - sorted[i][0];
    if (d > max) max = d;
  }
  return max;
};

console.log(
  f([
    [8, 7],
    [9, 9],
    [7, 4],
    [9, 7],
  ])
);
console.log(
  f([
    [3, 1],
    [9, 0],
    [1, 0],
    [1, 4],
    [5, 3],
    [8, 8],
  ])
);
