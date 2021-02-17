// Doesn't work

const f = (str) => {
  let map = {};
  let longest = "";
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
      arr.push(str[i]);
    } else {
      const temp = arr.join("");
      if (temp.length > longest.length) longest = temp;
      while (arr[0] !== str[i]) {
        delete map[arr.shift()];
      }
      console.log(map, temp, str[i]);
    }
  }
  return longest;
};


// A better solution
const g = (s) => {
  let hash = {};
  let max = 0;
  let l = (r = 0);
  if (s.length === 1) return 1;
  while (r < s.length - 1) {
    while (!hash[s[r]] && r < s.length) {
      hash[s[r]] = 1;
      r++;
      max = Math.max(max, r - l);
    }
    while (hash[s[r]]) {
      hash[s[l]]--;
      l++;
      max = Math.max(max, r - l);
    }
  }
  return max;
};


// Efficient Solution
const z = (s) => {
  const n = s.length;
  let ans = 0;
  let map = {};
  let i = 0;
  for (let j = 0; j < n; j++) {
    if (map[s[j]]) i = Math.max(map[s[j]], i);
    ans = Math.max(ans, j - i + 1);
    map[s[j]] = j + 1;
  }
  return ans;
};

console.log(f("abcabcbb"));
console.log(f("bbbbb"));
console.log(f("pwwkew"));
console.log(f("abcdae"));
