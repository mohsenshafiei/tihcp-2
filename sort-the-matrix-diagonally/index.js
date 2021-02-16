const sort = (matrix) => {
  let map = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const group = i - j;
      if (map && map[group] && map[group].length > 0)
        map[group].push(matrix[i][j]);
      else map[group] = [matrix[i][j]];
    }
  }
  for (let item in map) {
    map[item] = map[item].sort((a, b) => b - a);
  }
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const group = i - j;
      if (res[i]) {
        res[i].push(map[group].pop());
      } else {
        res[i] = [];
        res[i].push(map[group].pop());
      }
    }
  }
  return res;
};
console.log(
  sort([
    [3, 3, 1, 1],
    [2, 2, 1, 2],
    [1, 1, 1, 2],
  ])
);
