const f = (str) => {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;
  }
  let arr = [];
  let res = "";
  const sorted = Object.keys(map)
    .map((el) => {
      return [el, map[el]];
    })
    .sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < sorted.length; i++) {
    const x = sorted[i][0].repeat(sorted[i][1]);
    res += x;
  }
  return res;
};

f("tree");
