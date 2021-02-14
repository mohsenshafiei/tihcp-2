const f = (num) => {
  let x = num.split("").map((e) => parseInt(e));
  let count = 0;
  while (x.length > 0) {
    const min = Math.min(...x);
    x = x.map((l) => l - min).filter((e) => e !== 0);
    count += min;
  }
  return count;
};

console.log(f("27346209830709182346"));
console.log(f("32"));
