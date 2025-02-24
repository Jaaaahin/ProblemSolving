//Write a function to find the largest number in an array.

function findLargest(arr) {
  if (arr.length === 0) {
    return null;
  }

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([1, 2, 3, 40, 5])); // Output: 5