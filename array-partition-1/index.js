const f = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  let total = 0;
  for (let i = 0; i < sorted.length - 1; i += 2) {
    min = Math.min(sorted[i], sorted[i + 1]);
    total += min;
  }
  return total;
};

console.log(f([1, 4, 3, 2]));
