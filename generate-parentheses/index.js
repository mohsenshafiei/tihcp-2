const f = () => {
  console.log(this);
};
f.call(null);
f.call(7);

setImmediate(() => console.log("1"));
setTimeout(() => console.log("2"), 0);
process.nextTick(() => console.log("3"));
