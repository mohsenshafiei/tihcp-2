var bstToGst = function (root) {
  let sum = 0;
  const run = (node) => {
    if (node === null) return;
    run(node.right);
    node.val = sum += node.val;
    run(node.left);
    return root;
  };
  return run(root);
};
