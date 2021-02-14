const defangIPaddr = (str) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    str[i] === "." ? (res += "[.]") : (res += str[i]);
  }
  return res;
};

console.log(defangIPaddr("255.100.50.0"));
