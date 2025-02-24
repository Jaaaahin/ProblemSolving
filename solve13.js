function fixParanthases(string){

    let balance = 0 ; 
    let openToAdd = 0 ; 
     let closeToAdd = 0 ;
  

     for(let char of string){
        if(char === "("){
            balance ++;
        }
        else if(char === ")"){
            balance --;
     }

       if (balance<0){
        openToAdd++;
        balance =0; 
       }
     }

     return '('.repeat(openToAdd) + string + ')'.repeat(closeToAdd);
    }
console.log(fixParanthases("((())"));