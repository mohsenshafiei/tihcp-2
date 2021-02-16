class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const findMax = (arr) => {
  let max = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      index = i;
    }
  }
  return [index, max];
};

const constructMaximumBinaryTree = (nums) => {
  if (nums.length === 0) return null;
  const [maxIndex, max] = findMax(nums);
  let root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(
    nums.slice(maxIndex + 1, nums.length)
  );
  return root;
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));
