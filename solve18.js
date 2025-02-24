// function rotaedArray(arr,k){
//    const n = arr.length;
//    k = k%n;
//  let result = [];
//  for(let i =0 ; i<n; i++){
//     result[(i+k)%n] = arr[i];
//  }

//  return result;


// }
// console.log(rotaedArray([1,2,3,4,5],4));

function RotateArray(arr,k){
    
   const n = arr.length;
   k = k%n ; 

   const rotaedArray = arr.slice(-k).concat(arr.slice(0,n-k));

   return rotaedArray;


}

console.log(RotateArray([1,2,3,4,5],4));