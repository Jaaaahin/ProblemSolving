const bubble_sort = (arr) =>{
let swapped;
do{

    for(let i = 0 ; arr.length-1; i++){
        if(arr[i]<arr[i+1]){
            [arr[i],arr[i+1],arr[i+1],arr[i]];
            swapped = true;
        }
    }
}while(swapped)
    
return arr;
}


console.log(bubble_sort([1,2,3,4,5,6,7,8,9,10]));