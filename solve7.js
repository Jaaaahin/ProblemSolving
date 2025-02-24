
function sumArray(arr){


    let sum =0 ;
    let i = 0 ;
    while(i <arr.length){

         sum +=arr[i];
         i++;
    }

    return sum;


}

console.log(sumArray([1,2,4,5]));