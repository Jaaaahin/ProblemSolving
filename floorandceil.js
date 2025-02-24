const arr = (arr,target)=>{
   let start= 0; end = arr.length;
   while(start <= end){
     let store =-1 ,ceil =-1;
     let mid = Math.floor((start+end)/2);
     if(arr[mid]===target){
        floor = mid;
        ceil = mid;
        return [ceil,mid];
     }
     else if(arr[mid]>target){
          ceil = mid;
          end = mid-1;
     }else{
        floor = mid;
        start = mid+1;
     }
   }
   return [ceil,floor];
}
console.log(arr([1,2,3,4.6,5],4));
