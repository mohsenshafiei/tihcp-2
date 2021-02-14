const f = (c, e) => {
  const max = Math.max(...c);
  let res = [];
  for (let i = 0; i < c.length; i++) {
    if (c[i] + e >= max) res.push(true);
    else res.push(false);
  }
  return res;
};

console.log(f([4, 2, 1, 1, 2], 1));
