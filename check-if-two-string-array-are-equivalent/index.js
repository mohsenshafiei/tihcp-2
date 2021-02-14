const x = (arr1, arr2) => {
  let y = "";
  let z = "";
  for (let i = 0; i < arr1.length; i++) {
    y += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    z += arr2[i];
  }
  if (y === z) return true;
  return false;
};

console.log(x(["ab", "c"], ["a", "bc"]));
console.log(x(["abc", "d", "defg"], ["abcddefg"]));
