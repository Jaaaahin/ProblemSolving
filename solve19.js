// function longestPrefix(strs){

//        for(let i = 0 ; i<strs.length; i++){
//         for(let j= 1 ; j<strs.length; j++){
//              if(strs[0][i]!=strs[j][i]){
//                   return strs[0].slice(0,i);
//              }
//         }
// }
// }

// console.log(longestPrefix(["flower","flow","flight"]));


function longestPrefix(strs) {

      if(strs.length === 0)  return "";
      if(strs.length === 1) return strs[0];

      let prefix = strs[0];
      for(let i =1 ; i<strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
         prefix = prefix.substring(0,prefix.length-1);
         if(prefix.length === 0) return "";
        }
      }

      return prefix;

}
