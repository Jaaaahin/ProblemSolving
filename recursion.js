function recursive(n){
    if(n==0) return 1;
    return n*recursive(n-1);
}

const s = recursive(5);
console.log(s);
//sum of array 
let arr = [1,1,1,1,1]

function sumArray(arr){
     if(arr.length==0) return 0; 
    //  return (arr[arr.length-1]+sumArray(arr.slice(0,arr.length-1)));
    const last_Element = arr.pop();
    return last_Element + sumArray(arr);
}
console.log(sumArray(arr));




function isPlaindrome(s){
    if(s.length==0) return true;
    if(s[0]!==s[s.length-1]) return false;
    return isPlaindrome(s.slice(1,s.length-1));
}

console.log(isPlaindrome("racecar"));


function pow(x,n)
{
    if(n === 0 ) return 1;
    if(n<0) return x=1/x;
    n=-n;

    let result = 1;
    while(n>0){
        if(n%2 === 1) result *= x;
        x *= x;
        n = Math.floor(n/2);
    }
    return result;
    
}
console.log(pow(2, -3));