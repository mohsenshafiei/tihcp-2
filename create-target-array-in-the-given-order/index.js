const insertAt = (array, index, element) => {
  console.log(array.splice(index, 0, element));
};

const f = (arr, indexes) => {
  let x = [];
  for (let i = 0; i < arr.length; i++) {
    x.splice(indexes[i], 0, arr[i]);
  }
  return x;
};
console.log(f([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
