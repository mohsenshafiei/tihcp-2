const createArr = (n) => {
  let arr = new Array(n).fill(0);
  for (let i = 1; i <= n; i++) {
    arr[i] = i;
  }
  return arr;
};
class MRUQueue {
  constructor(n) {
    this.arr = createArr(n);
  }
  fetch = (k) => {
    if (k < this.arr.length) {
      const el = this.arr[k];
      this.arr = this.arr.filter((e, i) => i !== k);
      this.arr.push(el);
    }
  };
}
const q = new MRUQueue(8);
q.fetch(4);
q.fetch(10);
console.log(q);
