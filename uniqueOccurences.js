let uniqueOccurences = (arr) => {
  let count = {};
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  let seen = new Set();
  for (let key in count) {
    if (seen.has(count[key])) {
      return false;
    }
    seen.add(count[key]);
  }
  return true;
};
console.log(uniqueOccurences([1, 2, 2, 1, 1, 3])); // Output: true
console.log(uniqueOccurences([1, 2])); // Output: false