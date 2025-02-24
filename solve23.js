function sum(a,b){

    return a+b;

}


console.log(sum(2,3));


function totalSum(...a){

    let totalSum = 0;
  a.forEach((perElem)=>{
   
       totalSum += perElem;

  })
return totalSum;

}

console.log(totalSum(1,2,3,4,5));