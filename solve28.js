let nums = [8,8,7,7,7];

function majorityElements(nums) {

    for(let numbers of nums){

    let count = 0;

    for(let num of nums){

        if(num === numbers){
            count++;
        }
        }

    if(count >nums.length/2){
        return numbers;
    }




    }
}
console.log(majorityElements(nums));