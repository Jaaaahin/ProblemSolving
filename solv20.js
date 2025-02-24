function  isPalindrome(s){

  let left = 0 ;
  let right = s.length-1 ;
  const regExp = new RegExp(/[^a-zA-Z0-9]/i);
  while (left<right) {
    while(regExp .test(s[left])&& left<right) {
   left++ ;
}while(regExp.test(s[right])&& left<right) {
   right-- ;
}
   if((s[left]).toLowerCase() !== s[right].toLowerCase()){
       return false;
   }

   left++;
   right--;
     
    }

  return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("Not a palindrome"));