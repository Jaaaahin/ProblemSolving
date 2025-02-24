numbers = [1, 1, 0, 0, 1, 1,1,1];

const consecutiveOnes = (numbers) => {
  let tempCount = 0,
    Maxi = 0;
  for (let i = 0; i < numbers.length; i++) {
       if(numbers[i] === 1){
        tempCount++;
        Maxi = Math.max(Maxi , tempCount);
  }else if(numbers[i] === 0){
               tempCount=0;
  }
}
  return Maxi;
};

console.log(consecutiveOnes(numbers));