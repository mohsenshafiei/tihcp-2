const f = (matrix) => {
  let mapC = {};
  let mapR = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        mapR[i] = i;
        mapC[j] = j;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (mapR[i] === i || mapC[j] === j) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

console.log(
  f([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
console.log(
  f([
    [1, 2, 3, 4],
    [5, 0, 7, 8],
    [0, 10, 11, 12],
    [13, 14, 15, 0],
  ])
);
