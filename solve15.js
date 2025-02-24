// function flatenArray(arr){
//     let result = [] ;
//     let stack =  [...arr];



//     while(stack.length>0){
//        let element =    stack.pop();
//        if(Array.isArray(element)){
//              stack.push(...element);
//        }else{
//              result .unshift(element);
//        }
      

//     }

//     return result;
// }
// console.log(flatenArray([[1,2,3],[4,5,6],[7,8,9]]));


function flatenArray(arr) {
    let  result = [] ;


    for(let element of arr){

          if(Array.isArray(element)){
            
              result= result.concat(flatenArray(element));;  
          } else{
             result.push(element);
          }


    }
    return result;
}
console.log(flatenArray([[1,2,3],[4,5,6],[7,8,9]]));