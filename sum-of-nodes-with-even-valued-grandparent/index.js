const sumEvenGrandparent = (root) => {
  let sum = 0;
  for (let i = 0; i < root.length; i++) {
    if (root[i]) {
      if (i % 2 !== 0 && root[Math.floor((i - 3) / 4)] % 2 === 0)
        sum += root[i];
      if (i % 2 === 0 && root[Math.floor((i - 4) / 4)] % 2 === 0)
        sum += root[i];
    }
  }
  return sum;
};

var sumEvenGrandparent = (root) => {
  let total = 0;
  let dfs = (node) => {
    if (!node) return;
    if (node.val % 2 === 0) {
      if (node.left) {
        total +=
          (node.left.left ? node.left.left.val : 0) +
          (node.left.right ? node.left.right.val : 0);
      }
      if (node.right) {
        total +=
          (node.right.left ? node.right.left.val : 0) +
          (node.right.right ? node.right.right.val : 0);
      }
    }
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return total;
};

console.log(
  sumEvenGrandparent([6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5])
);
