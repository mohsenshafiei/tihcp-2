const max = (arr) => {
  const leftToRight = [];
  const topToBottom = [];
  for (let i = 0; i < arr.length; i++) {
    leftToRight.push(Math.max(...arr[i]));
  }
  const len = arr[0].length;
  for (let i = 0; i < len; i++) {
    let x = [];
    for (let j = 0; j < arr.length; j++) {
      x.push(arr[j][i]);
    }
    topToBottom.push(Math.max(...x));
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < len; j++) {
      sum += Math.min(leftToRight[i], topToBottom[j]) - arr[i][j];
    }
  }
  return sum;
};

console.log(
  max([
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0],
  ])
);
