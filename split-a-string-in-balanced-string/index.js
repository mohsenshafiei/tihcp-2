const f = (str) => {
  let stack = [];
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    const head = stack[stack.length - 1];
    if ((head === "R" && str[i] === "L") || (head === "L" && str[i] === "R")) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
    if (i > 0 && stack.length === 0) counter++;
  }
  return counter;
};
console.log(f("RLRRLLRLRL"));
console.log(f("RLLLLRRRLR"));
console.log(f("LLLLRRRR"));
console.log(f("RLRRRLLRLL"));
