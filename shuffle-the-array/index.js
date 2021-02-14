const shuffle = (arr, n) => {
  let x = [];
  for (let i = 0, j = n; i < n; i = i + 1, j = j + 1) {
    x.push(arr[i]);
    x.push(arr[j]);
  }
  return x;
};
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
