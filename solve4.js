//How would you count the occurrences of each character in a string?


function countChars(str) {
         let charCount={};
        for(char of str){
             if(charCount[char]){
                 charCount[char]++;
             }
             else{
                charCount[char]=1;
             }
        }

        return charCount;
}

console.log(countChars("jahin"));