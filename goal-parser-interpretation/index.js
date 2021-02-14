const f = (s) => {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s.substr(i, 2) === "()") {
      str += "o";
      i += 1;
    }
    if (s[i] === "G") {
      str += "G";
    }
    if (s.substr(i, 4) === "(al)") {
      str += "al";
      i += 3;
    }
  }
  return str;
};

console.log(f("G()()()()(al)"));
