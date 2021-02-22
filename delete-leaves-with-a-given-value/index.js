const f = (root, v) => {
  if (!root.left && !root.right && root.val === v) return null;
  let found = 0;
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (
      node.left &&
      node.left.val === v &&
      !node.left.left &&
      !node.left.right
    ) {
      found++;
      node.left = null;
    }
    if (
      node.right &&
      node.right.val === v &&
      !node.right.left &&
      !node.right.right
    ) {
      found++;
      node.right = null;
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return found > 0 ? f(root, v) : root;
};
