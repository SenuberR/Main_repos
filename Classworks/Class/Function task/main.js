"use strict"




// function getCalc(a, b){
//     if(a===b){

//         return 4*a;
//     }

//     else{
//         return 2*(a+b);
//     }
// }

// let val=getCalc(6,5)

// console.log(val)





const getFirstAndLastItem=(arr)=>{
    let newArray=[];
    let firstItem=arr[0];
    let lastItem=arr[arr.length-1];
    newArray.push(firstItem);
    newArray.push(lastItem);

    return newArray;

}

let array=[1,3,5,7,9];
console.log(getFirstAndLastItem(array))