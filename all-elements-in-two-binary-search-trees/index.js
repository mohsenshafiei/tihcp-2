const f = (root1, root2) => {
  let arr1 = [];
  let arr2 = [];
  let dfs = (node, arr) => {
    if (!node) return;
    dfs(node.left, arr);
    arr.push(node.val);
    dfs(node.right, arr);
  };
  dfs(root1, arr1);
  dfs(root2, arr2);
  return [...arr1, ...arr2].sort((a, b) => a - b);
};
