const f = (arr, k) => {
  if (arr.length === 0) return [];
  const res = arr.map((el) => {
    const dist = Math.sqrt(
      Math.abs(Math.pow(el[0], 2) + Math.pow(el[1], 2)),
      2
    );
    return [el[0], el[1], dist];
  });
  const final = res.sort((a, b) => a[2] - b[2]);
  return final.slice(0, k).map((a) => [a[0], a[1]]);
};

console.log(
  f(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
);
