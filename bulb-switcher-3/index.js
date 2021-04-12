const f = (arr) => {
  let sum = 0;
  let turned = 0;
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    turned++;
    if (sum === (turned * (turned + 1)) / 2) ans++;
  }
  return ans;
};

console.log(f([3, 2, 4, 1, 5]));
console.log(f([4, 1, 2, 3]));
