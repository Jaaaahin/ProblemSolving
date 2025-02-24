
// function indexText(mainString,subString){
// let m = mainString.length , n = subString.length;
// for(let i =0 ; i<=m-n; i++){
//     let flag = true;
//     for(let j=0; j<n; j++){
//           if(mainString[i+j] !==subString[j]){
//                 flag = false;
//                 break;
//           }
//     }if(flag){
//         return i;
//     }


//     }
//     return -1;
// }
// console.log(indexText("hello","ll"));

//linear search algorithm
let arr = [50,60,70,80,90,100];
function linearSearch(arr,target){
    let found =false;
  arr.forEach((element,index) => {
       if(element === target){
        console.log(`Element Found : ${element} at index ${index}`);
           found = true;
       }
  });
 if(!found){
    console.log("Element not found");
 }
}
linearSearch(arr,70);

//Create pow(x, n) function which returns x^n


// function pow(x,n){
 
//     if(n===0) return 1;
//     if(n<0) return 1/pow(x,-n);
//     let half = pow(x,Math.floor(n/2));

//     return n%2===0?half*half:half*half*x;


// }
// console.log(pow(2,3));
// function sumOfDigit(num){
//     let sum = 0 ; 
//     while(num>0){
//         sum +=num % 10;
//         num = Math.floor(num/10);
//     }
//     return sum;
// }
// console.log(sumOfDigit(1234));
function countDigit(num){
    let count = 0 ; 
    if(num===0) return 1;
   while(num>0){
      count++;
       num = Math.floor(num/10);
   }
return count;

}
console.log(countDigit(9876));