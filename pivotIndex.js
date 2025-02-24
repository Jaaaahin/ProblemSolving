
let numbers = [1,7,3,6,5,6];
function pivotIndex(numbers){

  let total =0 ;
  let leftSum = 0;
  for(let nums of numbers){
    total += nums;
  }
  for(let i = 0; i < numbers.length; i++){
    let rightSum = total - leftSum - numbers[i];
    if(leftSum === rightSum){
      return i;
    }
    leftSum += numbers[i];
  }
  return -1;

  }
console.log(pivotIndex(numbers));

