const d = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i += 2) {
    let j = 0;
    while (j < arr[i]) {
      res.push(arr[i + 1]);
      j++;
    }
  }
  return res;
};
