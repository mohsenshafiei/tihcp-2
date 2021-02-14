const x = (e, f) => {
  let res = [f];
  for (let i = 0; i < e.length; i++) {
    const last = res[res.length - 1];
    res.push(e[i] ^ last);
  }
  return res;
};
console.log(x([1, 2, 3], 1));
