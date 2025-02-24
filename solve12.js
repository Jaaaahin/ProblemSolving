function findMissingNumber(arr) {


    let max = arr[0];
    let  min = arr[0];

for(let i =0 ; i< arr.length; i++){
   if(arr[i]<min) min = arr[i];
   if(arr[i]>max) max = arr[i];
}

   let missingList = []; 

   for(let i = min ; i<=max; i++){
      
         let found = false;
        for(let j =0 ; j<arr.length; j++){
             
           if(arr[j]===i){
             found = true;
             break;
           }
        }
    
         
        
        if(!found){
            missingList.push(i);
          }
   
        }
    
return missingList;

    }
console.log(findMissingNumber([1,2,3,4,6]));
