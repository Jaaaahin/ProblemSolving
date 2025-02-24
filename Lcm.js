// function gcd(a,b){
//     if(b===0){
//         return a;
//     }
//     return gcd(b,a%b);
// }

// function lcmRecursive(a,b){

//     return (a*b)/gcd(a,b);
// }
// console.log(lcmRecursive(12,18)); 

function lcm(a,b){
    let max = Math.max(a,b);
    let min = Math.min(a,b);

    for(let i = max; i<=a*b; i+=max){
        if(i%min===0){
            return i;
        }
}
}
console.log(lcm(12,18));  // Output: 36

// function greet(name = "Guest") {

//     return `Hello, ${name}!`;
    
//     }
//   console.log(greet());  greet();

  console.log(sum(5, 5));

// console.log(multiply(5, 5));

function sum(a, b) {

return a + b;

}

const multiply = function (a, b) {

return a * b;

};
