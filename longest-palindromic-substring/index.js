// You should DP Programing

const isPalindrome = (s) => {
  let p = true;
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      p = false;
      break;
    }
  }
  return p;
};


const f = (s) => {
  for (let d = 1; d < s.length; d++) {
    for (let start = 0; start < s.length)
  }
}

console.log(isPalindrome("aba"));
console.log(isPalindrome("baba"));
console.log(isPalindrome("b"));
