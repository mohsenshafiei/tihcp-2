const f = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          (nums[i] < nums[j] && nums[j] < nums[k]) ||
          (nums[i] > nums[j] && nums[j] > nums[k])
        ) {
          count++;
        }
      }
    }
  }
  return count;
};

console.log(f([2, 5, 3, 4, 1]));
