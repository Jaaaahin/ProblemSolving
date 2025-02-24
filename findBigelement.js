// let arr = [50, 34, 122, 78, 99, 90];

// const bigElement = (arr) => {
//     let max = arr[0];
//   for (let arrays of arr) {
//       if (arrays > max) {
//           max = arrays;
//       }  

// }
// return max;
// };
// // Test the function
// console.log(bigElement(arr));
let arr = [50, 34, 122, 78, 99, 90];

function bigElement(arr) {
    return Math.max(...arr); // Return the maximum element
}

// Test the function
console.log(bigElement(arr)); // Output: 122
