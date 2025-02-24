// function sum(...numbers){
  
//      return numbers.reduce((a,b)=>a+b);
    

// }

// const result = sum(1, 2, 3, 4, 5);
// console.log(result);

// De structuring Arrays

// const data =[12,4,16,9,23];
// // const a = data[3];
// // const b = data[5];

// const [a,b,...c]=data;
// console.log(a,b,c);

// const person ={
//      fname : "JOHN",
//      lname : "DOE",
// }
// const {fname , lname} = person;
// console.log(fname,lname


// function addBorder(pictures){
//     let wall = "*".repeat(pictures[0].length+2);
//     pictures.unshift(wall);
//     pictures.push(wall);
//     for(let i = 1 ; i<pictures.length-1; i++){
//          pictures[i] = "*".concat(pictures[i], "*");
//     }
//     return pictures;
// }
// const pictures = ["abc","def","ghi","jkl","mno","pqr","students"];
// console.log(addBorder(pictures));

// function doubleCharacters(strings) {
//  return strings.map((string) => {
//   return string.split("").map((char) => char + char).join("");
//  });
// }
// const strings = ["abc","xyz"];
// console.log(doubleCharacters(strings));

// const doubleCharacters=(strings)=>{
//     return strings.map((strings)=>{
//         return strings.split("").map((char)=>char+char).join("");
//     })
// }
// const strings = ["abc","xyz"];
// console.log(doubleCharacters(strings));

function doubleCharacters(strings){

let result = [];
for(let str of strings){
let doubleStr ="";
for(char of str){
doubleStr += char+char;
}
result.push(doubleStr);
}
return result;
}
const strings = ["abc","xyz"];
console.log(doubleCharacters(strings));