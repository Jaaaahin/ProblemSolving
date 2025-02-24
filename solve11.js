function fibonnaciSeries(n){

    if(n<0) return [0];
    let fibo = [0,1];
    if(n === 0 ) return [0];

    for(let i =2 ;; i++){
          let nextFibo = fibo[i-1] + fibo[i-2];
          if(nextFibo>n) break;
          fibo.push(nextFibo);
 
    }

    return fibo;

}
console.log(fibonnaciSeries(10));