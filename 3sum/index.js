const f = (nums) => {
  let result = [];
  if (nums.length < 3) return result;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (curr > 0) break;
    let low = i + 1;
    let high = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (low < high) {
      const sum = curr + nums[low] + nums[high];
      if (sum === 0) {
        result.push([curr, nums[low], nums[high]]);
        low++;
        while (low < high && nums[low] === nums[low - 1]) low++;
        high--;
        while (high > low && nums[high] === nums[high + 1]) high--;
      } else if (sum < 0) low++;
      else high--;
    }
  }
  return result;
};

console.log(f([-1, 0, 1, 2, -1, -4]));
