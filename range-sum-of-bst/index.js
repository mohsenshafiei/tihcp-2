const rangeSum = (root.low, high) => {
  let sum = 0;
  const f = (r) => {
    if (!r) return null;
    if (r.val >= low && r.val <= high) sum += r.val;
    f(r.left);
    f(r.right);
  };
  f(root);
  return sum;
};
