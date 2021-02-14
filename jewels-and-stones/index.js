const f = (j, s) => {
  const jew = [...j];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (jew.includes(s[i])) count++;
  }
  return count;
};

console.log(f("aA", "aAAbbbb"));
