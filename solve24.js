// function addBorder(pictures){


//     let wall = "*".repeat(pictures[0].length+2);
//     pictures.unshift(wall);
//     pictures.push(wall);
//     for(let i =0 ; i<pictures.length-1; i++){
//         pictures[i]= "*".concat(pictures[i], "*");
//     }
//     return pictures;

// }
// //console.log(addBorder(["123","456","789"]));
// console.log(addBorder(["abc","def","ghi"]));


// function addBorder(pictures){


//  let wall = "*".repeat(pictures[0].length+2);
//  pictures.unshift(wall);
//  pictures.push(wall);
//  for(let i = 1 ; i<pictures.length-1; i++){

//      pictures[i]=`${pictures[i]}*`;
//  }

// return pictures;


// }

// const pictures = ["abc",
//     "def",
//     "ghi"];

// const result = addBorder(pictures);
// console.log(result.join("\n"));


const http = require("http");
const server = http.createServer((req, res) => {
   
     res.statusCode = 200;
     res.setHeader("Content-Type", "text/plain");
     res.end("hello world");
})
const port = 4000;
server.listen(port, () => {
     console.log(`Server running at http://localhost:${port}/`);
})