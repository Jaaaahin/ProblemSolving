const searchElement = (matrix, target) => {
    

     if(!matrix||matrix.length===0||matrix[0].length===0){
        return false;
     }
     let m = matrix.length , n = matrix[0].length;
     let left = 0 , right = m*n-1;
     while(left<=right){
        let mid = Math.floor((left+right)/2);
        let col = mid%n;
        let row = Math.floor(mid/n);
         let midVal = matrix[row][col];
         if(midVal===target){
            return true;
         }else if(midVal<target){
            left = mid+1;
         }else{
            right = mid-1;
         }
     }
return false;

};
console.log(searchElement([[1,3,5,7],[10,11,16,20],[23,30,34,60]],6));