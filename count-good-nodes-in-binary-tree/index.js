const f = (root) => {
  if (!root) return 0;
  let total = 0;
  dfs = (node, max) => {
    let m = max;
    if (!node) return;
    if (node.val >= max) {
      total++;
      m = node.val;
    }
    dfs(node.left, m);
    dfs(node.right, m);
  };
  dfs(root, root.val);
  return total;
};
