const getTargetCopy = (original, cloned, target) => {
  const dfs = (node) => {
    if (node) {
      if (node.val === target.val) return node;
      return dfs(node.left) || dfs(node.right);
    }
    return null;
  };
  return dfs(cloned);
};
