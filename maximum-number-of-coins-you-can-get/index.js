const f = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = sorted.length / 3; i < sorted.length; i += 2) {
    sum += sorted[i];
  }
  return sum;
};

console.log(f([9, 8, 7, 6, 5, 1, 2, 3, 4]));
