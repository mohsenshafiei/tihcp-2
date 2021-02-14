const x = (n, start) => {
  const y = new Array(n).fill(0).map((e, index) => start + 2 * index);
  let z = y[0];
  for (let i = 1; i < y.length; i++) {
    z = z ^ y[i];
  }
  return z;
};
console.log(x(5, 0));
