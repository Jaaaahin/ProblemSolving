function singleNonDuplicate(A){
    let n = A.length;
    if(n===1) return A[0];
    
    let st=0,end=n-1;
    
    while(st<=end){
        let mid = Math.floor(st+(end-st)/2);
        
        if(mid === 0 && A[0]!==A[1]) return A[0];
        if(mid === n-1 && A[n-1]!==A[n-2]) return A[n-1];
        
        if(A[mid]!==A[mid-1] && A[mid] !==A[mid+1]) return A[mid];
        if(mid %2 === 0){
            if(A[mid]===A[mid+1]){
                st = mid+1;
            }else{
            end=mid
                
            }
        }else{
            if(A[mid]===A[mid-1]){
                st=mid+1;
            }else{
                end=mid-1;
            }
        }
        
    }
    return -1;
}
console.log(singleNonDuplicate([1,1,2,2,3,3,4,5,5])); // Output: 4
console.log(singleNonDuplicate([3,3,7,7,10,11,11])); // Output: 10
console.log(singleNonDuplicate([1])); // Output: 1
