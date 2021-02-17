
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


// FIRST APPROACH
const reverse = (head) => {
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

const create = (arr) => {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return head;
};

const print = (head) => {
  let cur = head;
  while (cur) {
    console.log(cur.val);
    cur = cur.next;
  }
};

const f = (head1, head2) => {
  const reverseHead1 = reverse(head1);
  const reverseHead2 = reverse(head2);
  let cur1 = reverseHead1;
  let cur2 = reverseHead2;
  let prev = null;
  while (cur1 && cur2) {
    if (cur1.val === cur2.val) {
      prev = cur1;
      cur1 = cur1.next;
      cur2 = cur2.next;
    } else {
      return prev;
    }
  }
  reverse(reverseHead1);
  reverse(reverseHead2);
  return prev;
};


// SECOND APPROACH

const isObject = (object) => {
  return object != null && typeof object === "object";
};

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) return false;
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
}

const g = (head1, head2) => {
  let a = head1;
  let b = head2;
  while (!deepEqual(a, b)) {
    a = a.next !== null ? a.next : head2;
    b = b.next !== null ? b.next : head1;
    console.log(a.val, b.val);
  }
  return a;
};

console.log(g(create([4, 1, 8, 4, 5]), create([5, 6, 1, 8, 4, 5])));
