class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const f = (nums) => {
  if (nums.length === 0) return null;
  const stack = [];
  let root = new TreeNode(nums[0]);
  stack.push(root);
  for (let i = 1; i < nums.length; i++) {
    let node = stack.pop();
    const child = new TreeNode(nums[i]);
    while (stack.length !== 0 && node.val < child.val) {
      node = stack.pop();
    }
    if (node.val < child.val) node.right = child;
    else node.left = child;
    stack.push(child);
  }
  return root;
};

const preorder = (root) => {
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
};

preorder(f([8, 5, 1, 7, 10, 12]));
