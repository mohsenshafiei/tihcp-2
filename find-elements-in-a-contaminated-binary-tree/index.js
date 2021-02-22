class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class FindElements {
  constructor(root) {
    this.set = new Set();
    this.dfs(root, 0);
  }
  dfs = (node, val) => {
    this.set.add(val);
    node.left && this.dfs(node.left, val * 2 + 1);
    node.right && this.dfs(node.right, val * 2 + 2);
  };
  find = (target) => this.set.has(target);
}
