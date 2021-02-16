const decodeWays = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") {
      if (str[i] === "1") count++;
      if (str[i] === "2") {
        count++;
        if (parseInt(str[i + 1], 10) <= 6) count++;
        continue;
      }
      count++;
    } else continue;
  }
  return count;
};

let numDecodings = (s) => {
  let memo = {};
  let helper = (s) => {
    if (s[0] === "0") return 0;
    let sLen = s.length;
    if (sLen === 0) return 1;
    if (memo[s] !== undefined) return memo[s];
    let count = 0;
    count = helper(s.slice(1));
    if (sLen >= 2 && parseInt(s.slice(0, 2)) <= 26) {
      count += helper(s.slice(2));
    }
    memo[s] = count;
    return count;
  };
  return helper(s);
};

console.log(decodeWays("9"));
console.log(decodeWays("12"));
console.log(decodeWays("226"));
