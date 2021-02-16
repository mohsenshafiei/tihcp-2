const f = (nums) => {
  let res = Array(nums.length).fill(0);
  nums.sort((a, b) => a - b);
  const Q = [];
  for (let i = 0; i < nums.length; i++) Q.push(i);
  for (let i = 0; i < nums.length; i++) {
    res[Q.shift()] = nums[i];
    Q.push(Q.shift());
  }
  return res;
};
console.log(f([17, 13, 11, 2, 3, 5, 7]));
// [2,3,5,7,11,13,17]
// [2,13,3,11,5,17,7]
