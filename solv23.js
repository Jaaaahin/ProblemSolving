function addBorder(pictures){

    let wall ="*".repeat(pictures[0].length+2);
    pictures.unshift(wall);
    pictures.push(wall);
    for(let i =0 ; i<pictures.length; i++){
        pictures[i]= "*".concat(pictures[i], "*");
    }
    return pictures;

}

console.log(addBorder(["abc","ded"]));