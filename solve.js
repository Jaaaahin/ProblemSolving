//Write a function to check if a given string is a palindrome.


// function isPalindrome(str){

//     let left = 0;
//     let right =str.length-1;


//     while(left>right){
//         if(str[left] !== str[right]){
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;

// }



//using reverse function and split 


function isPalindrome (str){
  
      const a = str.split('').reverse().join('');
      return a === str;

}

console.log(isPalindrome("maddam"));


