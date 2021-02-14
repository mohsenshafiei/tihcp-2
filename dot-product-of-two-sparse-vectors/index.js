class SparseVector {
  constructor(nums) {
    this.nums = nums;
  }
  dotProduct(vec) {
    const { nums } = vec;
    return this.nums.reduce(
      (prev, current, i) => (prev += current * nums[i]),
      0
    );
  }
}
