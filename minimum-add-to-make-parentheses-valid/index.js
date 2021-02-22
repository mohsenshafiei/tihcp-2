const f = (str) => {
  let stack = [];
  let total = 0;
  if (str.length === 0) return 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")") {
      if (stack.length > 0) stack.pop();
      else total++;
    }
    if (str[i] === "(") stack.push(str[i]);
  }
  return total + stack.length;
};

console.log(f("()))(("));
