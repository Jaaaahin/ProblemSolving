let nums = [1,2,2,3,4];
function removeDuplicates(nums) {
    for(let i =0 ; i<nums.length; i++){
        for(let j =i+1; j<nums.length; j++){    
            if(nums[i] === nums[j]){ 
                nums.splice(j,1); 
                j--; 
            }
        }
    }
}

removeDuplicates(nums);
console.log(nums);