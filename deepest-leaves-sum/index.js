const deepestLeavesSum = (root) => {
  let leaves = [];
  let height = 0;
  let max = 0;
  let total = 0;
  const traverse = (e, h) => {
    if (!e.left && !e.right) {
      leaves.push([e, h]);
      if (h > max) max = h;
      return;
    }
    if (e.left) traverse(e.left, h + 1);
    if (e.right) traverse(e.right, h + 1);
  };
  traverse(root, height);
  for (let i = 0; i < leaves.length; i++) {
    if (leaves[i][1] === max) total += leaves[i][0].val;
  }
  return total;
};
