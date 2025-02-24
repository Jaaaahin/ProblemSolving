// const BinarySearch = function (arr, target) {
    
//   let start = 0 , end =arr.length-1;
//   while (start <= end) {
//     let mid = Math.floor((start+end)/2);


//     if(arr[mid]===target){
//           return mid;
//     }
//     else if(arr[mid]>target){ 
//         end = mid-1;
//   }else{
//     start = mid+1;
//   }
// }
// return -1;
// }
// console.log(BinarySearch([1,2,3,4,5],3));
var searchRange = function(nums, target) {
  function findFirst(nums, target) {
      let left = 0, right = nums.length - 1, first = -1;
      while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          if (nums[mid] >= target) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
          if (nums[mid] === target) {
              first = mid;
          }
      }
      return first;
  }

  function findLast(nums, target) {
      let left = 0, right = nums.length - 1, last = -1;
      while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          if (nums[mid] <= target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
          if (nums[mid] === target) {
              last = mid;
          }
      }
      return last;
  }

  let first = findFirst(nums, target);
  let last = findLast(nums, target);
  
  return [first, last];
};

// Example Test Cases
console.log(searchRange([5,7,7,8,8,10], 8)); // Output: [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)); // Output: [-1,-1]
console.log(searchRange([], 0));             // Output: [-1,-1]