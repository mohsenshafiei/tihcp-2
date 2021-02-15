const f = (a, w) => {
  let map = {};
  a.split("").map((c) => (map[c] = c));
  let count = 0;
  for (let i = 0; i < w.length; i++) {
    let ok = true;
    for (let j = 0; j < w[i].length; j++) {
      if (!map[w[i][j]]) ok = false;
    }
    if (ok === true) count++;
  }
  return count;
};

console.log(f("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(f("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]));
