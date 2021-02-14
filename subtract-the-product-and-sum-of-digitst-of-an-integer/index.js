const f = (n) => {
  const x = n.toString();
  let sum = 0;
  let mult = 1;
  const arr = [...x].map((e) => {
    const i = parseInt(e, 10);
    mult *= i;
    sum += i;
    return i;
  });
  return mult - sum;
};
console.log(f(4421));
