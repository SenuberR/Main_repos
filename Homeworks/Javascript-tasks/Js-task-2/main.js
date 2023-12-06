"use strict"




// Task 1: Function Basics

//1

// function greetUser(name){
//    return prompt("hello")
// }
// console.log(greetUser())


//2

// function calculateArea(a,b){
//     if(a===b){
//         return `Reactangle --- ${a**2}`
//     }
//     else{
//         return `Shape --- ${a*b/2}`
//     }
// }
// console.log(calculateArea(3,4))


//3

// function isEven(a){
//     if(a%2===0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(isEven(5))



//Task 2: Array Manipulation

//1

// let fruits = ['Strawberry', 'Mango','Avocado','Raspberry','Orange']

// function displayFruits(arr){
//     return  arr.map((item)=>`${item}-${item.length}`)
// }
// console.log( displayFruits(fruits))


//2

// let arrNumber=[1,2,3,4,5,6,7,8,9]
// let arrString=['hello','new year','open','holiday']

// function reverseArray(arr){
// return arr.reverse()
// }
// console.log(reverseArray(arrNumber))
// console.log(reverseArray(arrString))


//3

// let array=[1,2,3,4,5,6,7,8,9,10,15,24,39,60]
// function filterEvenNumbers(arr){
// return arr.filter((item)=>item%2==0)
// }
// console.log(filterEvenNumbers(array))



//Task 3: Object and Methods

//1

// let person={
//     name:"Ayla",
//     city:"Baku",
//     age:25,
// }

// function displayPersonInfo(obj){
//     return `${obj.name}--${obj.age}`
// }
// console.log(displayPersonInfo(person))


//2---???

// const person={
//     name:"Jane",
//     surname:"Carlos",
//     city:"New-York",
//     age:32,
// }

//3---???



//Task 4: Advanced Array Methods

//1

// let arr=[1,2,5,12,25,6,45,56]

// function getPower(array){
//     return array.map((item)=>item**2)
// }
// console.log(getPower(arr))

//2

// const arr=["one","hello","Italian","two","mother","Baku","Azerbaijan"]

// function getLength(array){
//     return array.filter((item)=>item.length>=5)
// }
// console.log(getLength(arr))

//3

// const arr=[24,27,35,44,57,69,85,92,123]

// function getSum(array){
//     return array.reduce((a,b)=>a+b)
// }
// console.log(getSum(arr))