const f = (s, arr) => {
  let res = new Array(s.length).fill("");
  for (let i = 0; i < s.length; i++) {
    res[arr[i]] = s[i];
  }
  return res.join("");
};
console.log(f("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
