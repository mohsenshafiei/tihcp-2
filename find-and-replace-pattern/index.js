const getMap = (s) => {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = Object.keys(map).length;
  }
  return map;
};

const isCodeEqual = (a, b) => {
  let xStr = "";
  const x = Object.keys(a).map((el) => (xStr += a[el]));
  let yStr = "";
  const y = Object.keys(b).map((el) => (yStr += b[el]));
  if (xStr === yStr) return true;
  return false;
};

const f = (words, pattern) => {
  let res = [];
  const patternMap = getMap(pattern);
  for (let i = 0; i < words.length; i++) {
    const wordMap = getMap(words[i]);
    if (
      Object.keys(patternMap).length === Object.keys(wordMap).length &&
      isCodeEqual(patternMap, wordMap)
    ) {
      res.push(words[i]);
    }
  }
  return res;
};

console.log(f(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"));
