// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const two_sum =  (numbers, target) => {
  let map = new Map();
  for(let i =0 ; i<numbers.length; i++){
     let complement = target -numbers[i];
     if(map.has(complement)){
         return [map.get(complement), i];

     }
      map.set(numbers[i], i);
   

  }
return [];  

};
console.log(two_sum([2,7,11,15], 9)); // Output: [0,1]  Because nums[0] + nums[1] == 9, we return [0, 1].
console.log(two_sum([3,2,4], 6)); // Output: [1,2] Because nums[1] + nums[2] == 6, we return [1, 2].