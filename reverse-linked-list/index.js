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

const g = (head) => {
  let prev = null;
  let curr = head;
  while (curr.next !== null) {
    let nextCur = curr.next;
    curr.next = prev;
    prev = curr;
    cur = nextCur;
  }
  return prev;
};
