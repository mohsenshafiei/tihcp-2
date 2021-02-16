const f = (head) => {
  let prev = null;
  let curr = head;
  while (curr != null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
};
