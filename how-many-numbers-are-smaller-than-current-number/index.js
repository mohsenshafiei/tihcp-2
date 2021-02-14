const x = (arr) => {
  const sortedArray = [...arr].sort((a, b) => a - b);
  let count = {};
  for (let i = 0; i < sortedArray.length; i++) {
    if (count.hasOwnProperty(sortedArray[i])) {
      continue;
    } else {
      if (i === 0) {
        count[sortedArray[i]] = 0;
      } else {
        count[sortedArray[i]] = i;
      }
    }
  }
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(count[arr[i]]);
  }
  return res;
};

console.log(x([7, 7, 7, 7]));
