function anagramNumber(number){


   const digits = number.toString().split("");
   const power = digits.length;

    let sum = 0; 

    for(let digit of digits){
         sum+=Math.pow(parseInt(digit),power);
    }


return sum ===number;


}

console.log(anagramNumber(123));
console.log(anagramNumber(153));