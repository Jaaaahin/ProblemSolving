// const str = "Boss is here to make a good dance";
// console.log(str.slice(-10,-1));
// console.log(str.split(" "));

// const obj ={
//      name:"Jahin",
//      age:22

// }

// console.log(obj,JSON.stringify(obj));
// const LastName = "jahin";
// const FirstName = "ali";
// console.log(FirstName.concat(LastName));

// function occurenceIndex(haystack,needle){
//     let  pointer = 0;

//      for(let index = 0 ; index < haystack.length; index++){
//          if(haystack[index] != needle[pointer]){

//            index -=pointer;
//            pointer =0;
//          }
//          else if( pointer === needle.length-1) {
//                         return index-pointer;
//          }else{
//              pointer++;
//          }
//      }
//      return -1;

//     }

// console.log(occurenceIndex("hello","ll"));

// function indexText(haystack, needle) {
 
//   let n = haystack.length, m = needle.length;
//   if(m === 0) return 0;
//   for(let i =0 ; i<n-m ; i++){
//       let j =0 ;
//        while(j<m &&  haystack[i+j] === needle[j]){
//          j++;
//        }
//        if(j===m){
//          return i;
//        }
//   }
//   return -1;


// }
// console.log(indexText("hello","ll"));

//  function indexText(haystack, needle) {

//    let pointer = 0 ; 
//    for(let i =0 ; i<haystack.length; i++){
//          if(haystack[i]!=needle[pointer]){
//                i = i - pointer;
//                pointer =0;
//          }else if(pointer === needle.length-1){
//              return i-pointer;

//          }else{
//             pointer++;
//          }
//    }
// return -1

//  }
//  console.log(indexText("hello","ll"));

// const mergedAlterrnately = (word1 , word2)=>{
    
//       let result = ''; 
//       const maxLength =  Math.max(word1.length,word2.length);
//       for(let i = 0 ; i< maxLength; i++){
//            if(i<word1.length){
//                result += word1[i];
//            }
//            if(i<word2.length){
//                result +=word2[i]
//            }
//       }
//  return result;    
     
     
//  }
// console.log(mergedAlterrnately("abc","pqr"));



const validPalindrome = (s)=>{
    
    
      let cleaned =  s.toLowerCase().replace(/[^a-z0-9]/g, '');
      let left = 0 ; let right = cleaned.length-1;
      while(left<right){
         if(cleaned[left] !== cleaned[right]){
                  return false ;
                
         }
         left++;
         right--;
      }
      return true;
  }
  
  
  console.log(validPalindrome("maddam"));