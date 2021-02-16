const f = (root) => {
  let queue = [];
  let map = {};
  if (!root) return root;
  queue.unshift(root);
  while (queue.length > 0) {
    const node = queue.pop();
    if (!node) continue;
    if (map[node.val]) {
      node = null;
      return;
    } else {
      map[node.val] = node.val;
    }
    if (node && node.right) queue.unshift(node.right);
    if (node && node.left) queue.unshift(node.left);
  }
};

var correctBinaryTree = function(root) {
  
  if (!root) return null
  
  const queue = [root]
  const map = new Map()
  
  while (queue.length) {
    const curr = queue.shift()
    const dir = queue.shift()
    
    if (map.has(curr.right)) {
      const parent = map.get(curr)
      if (dir === 'l') parent.left = null
      else parent.right = null
      break
    }
    
    if (curr.left) {
      queue.push(curr.left, 'l')
      map.set(curr.left, curr)
    }
    
    if (curr.right) {
      queue.push(curr.right, 'r')
      map.set(curr.right, curr)
    }
  }
  
  return root
};

f();
