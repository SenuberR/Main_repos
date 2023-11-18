"use strict"


//1

// let arr=["hay","junk","hay","hay","morejunk","needle",]

// function findNeedle(array){
//  let method=arr.indexOf("needle");
//  return method;
// }

// console.log(findNeedle(arr))



//2

// const arr1 = [1, 1, 1, 1];
// const arr2 = [2, 2, 2, 2];
// let arr=arr1.concat(arr2)

// function twoArray(x,y){
//  let arr=x.concat(y)
//     return arr.reduce((acc,curr)=>acc+curr,0)
// }

// console.log(twoArray(arr1,arr2))



//3

// const numbers = [1,4,5,6,10,20,2]
// function getCondition(i){
//     return numbers.map((i)=>num>5 ? 1 : 0)
//    return numbers.map((i)=>{
//       if(i<5){
//         return 0
//     }

//     else {
//         return 1
//     }
//     })
// }
// ?-true hali, :-false hali

// console.log(getCondition(numbers))



//4

// let arr= "apple ban"


// function getLength(array){

//    let arr2= array.split(" ")
//   return  arr2.map((item)=>`${item}-${item.length}`)

// }

// console.log(getLength(arr))


//5

// let arr=[1,2,3,4,5]

// function getAverage(array){
//   return  array.reduce((a,b)=>(a+b))/array.length
// }

// console.log(getAverage(arr))



//6

let arr=[1,-2,3,-4,5]
function getInverse(item){
   return arr.map((item)=>item*(-1))
  
}
console.log(getInverse(arr))
