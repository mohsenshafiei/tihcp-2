const f = (arr) => {
  let merged = [];
  let sorted = arr.sort((a, b) => a - b);
  let cost = 0;
  if (sorted.length == 1) return cost;
  while (sorted.length || merged.length > 1) {
    let first;
    let second;
    if (!merged.length || sorted[0] <= merged[0]) first = sorted.shift();
    else first = merged.shift();

    if (!merged.length || sorted[0] <= merged[0]) second = sorted.shift();
    else second = merged.shift();

    let s = first + second;
    merged.push(s);
    cost += s;
  }
  return cost;
};

console.log(f([1, 8, 3, 5]));
console.log(f([2, 4, 3]));
console.log(f([3354, 4316, 3259, 4904, 4598, 474, 3166, 6322, 8080, 9009]));
