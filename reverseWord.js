// function reverse(s){
        
//     let result = "";
//     let word = " ";
//     let spaceFound = false;
    
//     for(let i =s.length-1 ; i>=0 ; i--){
//         if(s[i] !== ' '){
//          word= s[i]+word;
//          spaceFound =false;
//         }else if(word !== "" && !spaceFound){
//         result +=(result === "" ? "" : " ") + word;
//         word = " ";
//         spaceFound = true;
//     }
// }

// if(word !==""){
//     result +=(result === ""?"":" ") + word; 
// }
//     return result;
// }
// console.log(reverseWords("the sky is blue"));   


// function reverseVowels(s){
    
//     let vowels = "aeiouAEIOU";

//     let arr= s.split("");
//     let left = 0,right = arr.length-1;

//     while(left < right){
//         if (vowels.indexOf(arr[left]) !== -1 && vowels.indexOf(arr[right]) !== -1){
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right]= temp;
//         left++;
//         right--;
     
//     }else{

//         if(vowels.indexOf(arr[left])===-1)  left++;
//         if(vowels.indexOf(arr[right])===-1)  right++;
//     }
// }
// return arr.join(" ");

// }
// console.log(reverseVowels("the sky is blue"));

function rotateString(s,goal){
 
    if(s.length != goal.length){
        return false;
    }
    
    let doubleS = s+s; 
    for(let i =0 ;  i<doubleS.length -goal.length; i++){
         let match = true;
   
         for(let j = 0 ; j<goal.length; j++){        
            if(doubleS[i+j] !== goal[j]){
                match = false;
                break;
            }

        }
        if(match) return true;


}
return false;
}
console.log(rotateString("abcde","cdeab"));