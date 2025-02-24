function removeArray(arr){
    let unique = [];

for(let i =0 ;i<arr.length;i++){
    let isDuplcate = false;
    for(let j=0;j<unique.length;j++){
        if(arr[i] === unique[j]){
             isDuplcate = true;
             break;
        }

    }

    if(!isDuplcate){
        unique[unique.length] = arr[i];
    }
    
}

return unique;
}

console.log(removeArray([1,2,3,4,1,2,3]));