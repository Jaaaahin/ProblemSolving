const st = (strs) => {
  let map = new Map();
  for (let str of strs) {
    let sorted = str.split('').sort().join('');
    if (!map.has(sorted)) map.set(sorted, []);
    map.get(sorted).push(str);
}
  return Array.from(map.values());
};

// Example Test Cases
console.log(st(["eat", "tea", "tan", "ate", "nat", "bat"])); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(st(["a"])); // Output: [["a"]]
