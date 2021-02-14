const f = (x) => {
  let y = x;
  let count = 0;
  while (y !== 0) {
    if (y % 2 === 0) {
      y = y / 2;
      count++;
    } else {
      y--;
      count++;
    }
  }
  return count;
};

console.log(f(14));
