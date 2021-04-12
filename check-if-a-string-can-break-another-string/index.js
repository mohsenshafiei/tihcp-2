const f = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  if (s1.length === 0 && s2.length === 0) return false;
  const alp = "abcdefghijklmnopqrstuvwxyz";
  let alpMap = {};
  for (let i = 0; i < alp.length; i++) {
    alpMap[alp[i]] = i;
  }
  let map1 = [];
  let map2 = [];
  for (let i = 0; i < s1.length; i++) {
    map1.push(alpMap[s1[i]]);
    map2.push(alpMap[s2[i]]);
  }
  const arr1 = map1.sort((a, b) => a - b);
  const arr2 = map2.sort((a, b) => a - b);
  let ok1 = true;
  let ok2 = true;
  for (let i = 0; i < arr1.length; i++) {
    if (ok1 === false && ok2 === false) break;
    if (arr1[i] > arr2[i]) ok1 = false;
    if (arr2[i] > arr1[i]) ok2 = false;
  }
  return ok1 || ok2;
};

console.log(f("leetcodee", "interview"));
console.log(f("abe", "acd"));
