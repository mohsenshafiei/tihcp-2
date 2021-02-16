class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const f = (head, m, n) => {
  let node = head;
  let steps = 1;
  while (node) {
    if (steps === m) {
      let prev = node;
      steps = 0;
      while (steps < n && node.next) {
        node = node.next;
        steps++;
      }
      let next = node.next;
      node = prev;
      node.next = next;
      steps = 0;
    }
    steps++;
    node = node.next;
  }
  return head;
};

const r = (nums) => {
  let head = new ListNode(nums.shift());
  let cur = head;
  for (let i = 0; i < nums.length; i++) {
    cur.next = new ListNode(nums[i]);
    cur = cur.next;
  }
  return head;
};
const p = (head) => {
  let cur = head;
  while (cur) {
    console.log(cur.val);
    cur = cur.next;
  }
};

console.log(p(f(r([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 2, 3)));
