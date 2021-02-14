const f = (str, s) => {
  let map = {};
  let d = 0;
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = i;
  }
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      d += map[s[i]];
    } else {
      d += Math.abs(map[s[i]] - map[s[i - 1]]);
    }
  }
  return d;
};

console.log(f("abcdefghijklmnopqrstuvwxyz", "cba"));
console.log(f("pqrstuvwxyzabcdefghijklmno", "leetcode"));
