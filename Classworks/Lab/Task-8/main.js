"use strict"



//function-1

// function getReverse(x){
//     let result=""

//     for(let  i=x.length-1; i>=0; i--){
//         result= result+x[i];
//     }
// return result;
// }

// // getReverse(x)
// console.log(getReverse("salam"))



//function-2

// let x = "never give up";
// let a=[];

// function getLetter(x){
//     let repeat=0

//     for (let i = 0; i < x.length; i++){

//         if(x[i]=='v'){
           
//             repeat++;

//         };
//     }
//     return repeat
// }
// console.log(getLetter(x))



//function-3

const cars = [
    {
        color: "red",
        type: "mercedes",
        capacity: 5,
        price:100
    },

    {
        color: "blue",
        type: "bmw",
        capacity: 2,
        price:150
    },
    {
        color: "blue",
        type: "ford",
        capacity: 6,
        price:200
    },
    {
        color: "blue",
        type: "bmw",
        capacity: 6,
        price:400
    },
]

// const newArray = cars.map((car)=>{
//     if (car.capacity <= 3) {
//         return `small ${car.type}` 
//       }
//      if(car.capacity<=5){
//         return `medium ${car.type}` 
//       }
//       else{
//         return `large ${car.type}` 
//       }
// });

// console.log(newArray)



//function-4



const discountCarPrice = cars.filter((car)=>car.color=="blue").map((car)=>{
    const discount = car.price - (car.price*30)/100;
    return discount;
})

console.log(discountCarPrice)



