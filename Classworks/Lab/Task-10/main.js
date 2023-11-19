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
//     return numbers.map((i)=>i>5 ? 1 : 0)
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

// let arr=[1,-2,3,-4,5]
// function getInverse(item){
//    return arr.map((item)=>item*(-1))
  
// }
// console.log(getInverse(arr))



//7

// let arr= [1, 2, 3, 4]

// function getSum(array){

//    return array.reduce((a,b)=>a*b)
  
// }
// console.log(getSum(arr))



//8

// let arr=[1,2,2]

// function getSquare(array){

// //  return array.map((item)=>item**2).reduce((a,b)=>a+b)
// return array.reduce((a,b)=>a+b**2)

// }

// console.log(getSquare(arr))



//9

// let arr=[1, -12, 2, -13, 3, 5, -11, -14, -15]

// function getPositiveSum(num){

// // return num.filter((i)=>i>0).reduce((a,b)=>a+b)

// // return num.reduce((a,b)=>b>0 ? a+b : a)
// // return num.reduce((a,b)=>{
// //    if(b>0){
// //       return a+b
// //    }
// //    else{
// //       return a
// //    }
// // })

// }
// console.log(getPositiveSum(arr))



//10

// const arr = ['hello', 'world', 'this', 'is', 'great'] 

// function getSentences(array){

// // return array.reduce((a,b)=>a + " " + b)
// return array.join(" ")

// }

// console.log(getSentences(arr))



//11

// const numbers=String(35231)

// function getReverse(array){

//   return array.split("").reverse().map(Number)
  
// }
// console.log( getReverse(numbers))




//12

let arr1=[1, 3, 5, 7, 9, 11, 12]
let arr2=[1, 2, 3, 4, 5, 10, 12] 



function getNewArray(a,b){
   return a.filter(((item)=>!b.includes(item))).concat(b).sort((a,b)=>a-b)

   // !-olmayan reqemleri goturub, !-qoymasaq eyni olanlari goturecek

}
console.log(getNewArray(arr1,arr2))













 // return array.map(Number)