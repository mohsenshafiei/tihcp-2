const f = (head) => {
  let cur1 = head;
  let cur2 = head;
  while (cur2) {
    cur2 = cur2.next;
    if (!cur2) return cur1.val;
    cur2 = cur2.next;
    cur1 = cur1.next;
  }
  return cur1;
};
