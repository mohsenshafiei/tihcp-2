const average = (arr) => {
  let total = 0;
  let max = 0;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return ((total - min - max) / (arr.length - 2)).toFixed(4);
};

console.log(average([4000, 3000, 1000, 2000]));
