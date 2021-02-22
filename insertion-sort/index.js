const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        const t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
        i = j;
      }
    }
  }
  return arr;
};

console.log(insertionSort([1, 2, 3, 4, 5, 10, 11, 1, 1]));
