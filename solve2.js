//Implement a function to reverse a string.


// function reverseString(str) {
    
//         return str.split('').reverse().join('');

// }
// console.log(reverseString("jahin"));


function log(){
     console.log(reverseString("jahin"));
}

function reverseString(str) {

     let rev ="";
     for(let i = str.length-1; i>=0; i--){

            rev += str[i];
           
     }

     return rev;
}   
log();