const f = (head) => {
  let len = 0;
  let arr = [];
  let cur = head;
  let res = 0;
  while (cur.next !== null) {
    arr.push(cur.val);
    cur = cur.next;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) res += Math.pow(2, arr.length - i);
  }
  return res;
};
