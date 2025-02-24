function binarySearch(arr ,target){

   let leftIndex = 0; 
   let rightIndex = arr.length-1;

   while(leftIndex <= rightIndex){

        let midIndex = Math.floor((leftIndex+rightIndex)/2);
        if(arr[midIndex] === target){
          return midIndex;
        }else if(midIndex > target){
          rightIndex = midIndex-1;

        }else{
          leftIndex = midIndex+1;
        }


   }
     return -1;

}


console.log(binarySearch([1,2,3,4,5,6],3));