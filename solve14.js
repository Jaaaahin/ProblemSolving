function secondLarge(arr){


   let   largest = -Infinity ,    secondLargest = -Infinity;

   for(let num of arr){

       if(num>largest){
          secondLarge = largest;
          largest = num;
       }else if (num>largest && num >secondLarge){

        secondLarge = num; 
       }

   


   }





return secondLarge === -Infinity    ? null : secondLarge; 




}

console.log(secondLarge([1,2,3,4,5,6,7]));