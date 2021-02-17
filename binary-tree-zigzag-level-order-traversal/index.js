class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const create = (arr) => {
  if (arr.length === 0) return null;
  let root = new TreeNode(arr[0]);
  const dfs = (node, val) => {
    if (!node) return new TreeNode(val);
    if (val < node.val) node.left = dfs(node.left, val);
    else node.right = dfs(node.right, val);
    return node;
  };
  for (let i = 1; i < arr.length; i++) {
    dfs(root, arr[i]);
  }
  return root;
};

const traverse = (root) => {
  let arr = [];
  const t = (r, level) => {
    if (!r) return;
    if (level % 2 !== 0) {
      if (r && r.left) t(r.left, level + 1);
      if (r && r.right) t(r.right, level + 1);
      if (!arr[level]) arr[level] = [r.val];
      else arr[level].unshift(r.val);
    } else {
      if (r && r.left) t(r.left, level + 1);
      if (r && r.right) t(r.right, level + 1);
      if (!arr[level]) arr[level] = [r.val];
      else arr[level].push(r.val);
    }
  };
  t(root, 0);
  return arr;
};

console.log(traverse(create([3, 9, 20, 8, 15, 17])));
