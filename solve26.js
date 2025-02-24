// let data = [9,45,2,3,6,4,8,7,1,5,10,11,12,14,13,15,16,17,18,19,20];

// for(let key in data ){

//     console.log(`${key} => ${data[key]}`);
// }
// function getElement(){
//     if(el<data.length){
//         let el = document.getElementById("element").value;
//         alert(data[el]);
        
//     }else{
//         alert("Element not found");
//     }
 
// }


// let data = [50,60,70,80,90,65];
// let NewEl= 23;
// let position= 2;
// for(let i =data.length-1; i>=0; i--){
//      if(i>=position){
//         data[i+1] = data[i];
//         if(i==position){
 
 
//             data[i] = NewEl;
//         }
// }
// }
// console.log(data);  

function linearSearch(arr, target) {
    const results = [];
    // অ্যারের প্রতিটি এলিমেন্ট চেক করুন
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            // ম্যাচ পাওয়া গেলে রেজাল্টে যোগ করুন
            results.push({ index: i, value: arr[i] });
        }
    }
    return results;
}

// // উদাহরণ ব্যবহার:
// const data = [5, 2, 7, 2, 4];
// const target = 2;

// const searchResults = linearSearch(data, target);

// if (searchResults.length === 0) {
//     console.log("Element is not in array");
// } else {
//     console.log(`'${target}'   Gotcha:`);
//     searchResults.forEach(result => {
//         console.log(`index ${result.index}-e  (value: ${result.value})`);
//     });
// }

function linearSearch(arr, target) {
    const result = [];
    for(let i=0 ; i<arr.length; i++){
        if(arr[i] === target){
            result.push({index: i, value: arr[i]});
        }
    }
    return result;
}
const numbers = [5,2,5,4,3,9]
const searchTarget = 5
const foundResult = linearSearch(numbers, searchTarget);
if(foundResult.length === 0){
    console.log("Element is not in array");
}else{
    console.log(`'${searchTarget}'   Gotcha:`);
    foundResult.forEach(result => {
        console.log(`index ${result.index}-e  (value: ${result.value})`);
    });
}