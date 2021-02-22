const f = (arr, a, b, c) => {
  let total = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const x = Math.abs(arr[i] - arr[j]) <= a;
        const y = Math.abs(arr[j] - arr[k]) <= b;
        const z = Math.abs(arr[i] - arr[k]) <= c;
        if (x && y && z) total++;
      }
    }
  }
  return total;
};
