//anagrams are words that contain the same letters but in a different order. Write a function to check if two strings are anagrams of each other.


function areAnagrams(str1,str2){
       
     if(str1.length !== str2.length){
        return false;
     }

     const count1 = {};
     const count2 = {};

     for(let i=0 ; i<str1.length; i++){

        const char1 = str1[i];
        const char2 = str2[i];

        if(count1[char1]){
            count1[char1]++;
        }
        else{
            count1[char1] = 1;
        }

        if(count2[char2]){
            count2[char2]++;
        }
        else{
            count2[char2] = 1;
        }
}

     for(let char in count1){

        if(!count2[char] || count1[char] !== count2[char]){
            return false;
        }
 
     }
return true;
}
console.log(areAnagrams("listen","silent"));