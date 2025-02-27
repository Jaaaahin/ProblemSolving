const sumOfUnique = (nums) => {
  let freq = {};
  let sum = 0;
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] === 1) {
      sum +=Number(key);
    }
  }

  return sum;
};
console.log(sumOfUnique([1, 2, 3, 2])); // Output: 4
