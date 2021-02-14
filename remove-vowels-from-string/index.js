const vowels = ["a", "e", "i", "o", "u"];

const remove = (s) => {
  const x = [...s].filter((e) => !vowels.includes(e)).join("");
  return x;
};

console.log(remove("leetcodeisacommunityforcoders"));
