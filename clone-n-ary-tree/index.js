const cloneTree = (root) => {
  return dfs(root);
};

// recursive
const dfs = (root) => {
  if (!root) return null;
  const node = new Node(root.val);
  for (let n of root.children) {
    const child = dfs(n);
    if (child) node.children.push(child);
  }
  return node;
};
