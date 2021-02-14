const f = (arr) => {
  let sum = 0;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
    res.push(sum);
  }
  return res;
};

console.log(f([1, 1, 1, 1, 1]));
