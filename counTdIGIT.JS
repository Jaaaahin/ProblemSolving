// function CountDigit(num) {
//   num = Math.abs(num);
//   let count = 0;
//   do {
//     count++;
//     num = Math.floor(num / 10);
//   } while (num > 0);
//   return count;
// }
// console.log(CountDigit(1234));

//number palindrome

// const isPalindrome = (x) =>{
 
//        let  copyNum = x , reversed=0;
//        while(copyNum>0){

//           const lastNumber = copyNum%10;
//           reversed = reversed*10 + lastNumber;
//           copyNum = Math.floor(copyNum/10);



//        }
// return x === reversed



// }
// console.log(isPalindrome(121));







//fibonacchi series 



// const fib = (n) => {

//          if(n<2){
//             return n
//          }
//          let prev = 0 , current =1 , next;
//          for(let i =2 ; i<=n; i++){

//             next = prev + current;
//             prev = current;
//             current = next;

//          }
// return next;
// }
// console.log(fib(10));



// const findElement = (arr,target) => {
//      for(let arrays of arr){
//         if(arrays === target){
//             return true
//         }
        
//      }
//      return false
// }
// console.log(findElement([1,2,3,4,5],7));
//for of loop use kore element er index find korte hobe

// const findElement = (array, target)=>{
//    let currentIndex=0;
//    for(let arrays of array){
//       if(arrays === target){
//         return currentIndex;
//       }
//     currentIndex++;
//    }
//    return -1;

// }
// console.log(findElement([1,2,3,4,5],4));


// const findElement = (array,target)=>{
 

//      for(let index in array){
//         let numberIndex = Number(index);
//          if(array[numberIndex] === target){
//             return numberIndex;
//          } 
//      }
//      return -1;


// };
// let arr = [];

// // console.log(findElement([1,2,3,4,5],4));
// const arrB = arr;
// arrB.push(6);
// console.log(arrB,arr);
// let arr = [1,2,3,4,5];
// const arrC = [...arr];
// arrC.push(6);
// console.log(arrC,arr);

// const isArrayEqual = (arr1,arr2)=>{


// //    if(arr1.length !== arr2.length){
  
// //    return false;
// //    }
// //    for(let i =0 ; i<arr1.length; i++){
// //       if(arr1[i] !== arr2[i]){
// //          return false;
// //       }
// //    }
// //    return true;
// return arr1.length === arr2.length && arr1.every((element,index) => element === arr2[index]);

// }
// console.log(isArrayEqual([1,2,3],[1,4,3]));



// function moveZeros(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       count++;
//     } else {
//       arr[i - count] = arr[i];
//     }
//   }
//   for (let i = arr.length - count; i < arr.length; i++) {
//     arr[i] = 0;
//   }
//   return arr;
// }

// function twoSum(arr, target) {
//   const map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     const complement = target - arr[i]; //hathe thakar number eikane rekhe dilam 

//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(arr[i], i);
//   }
//   return [];
// }


// function twoSum(arr, target){
//    const newMap = new Map();
//    for(let i = 0 ; i<arr.length; i++){
//       const complement = target - arr[i];
//       if(newMap.has(complement)){
//          return [newMap.get(complement),i];
//       }
//       newMap.set(arr[i],i);
//    }
//    return [];
// }


  

// console.log(twoSum([1,2,3,4,5],9));