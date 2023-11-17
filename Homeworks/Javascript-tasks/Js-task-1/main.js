"use strict"



const persons = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
  ];
  

  // -----Map method-----

//1
//   let arr=persons.map((item)=>item.name)
//   console.log(arr)

//2
//   let arr=persons.map((item)=>item.height)
//   console.log(arr)

//3
// let arr=persons.map((item)=>`height--${item.height}, name--${item.name}`)
// console.log(arr)

//4???
let arr=persons.map((item)=>item.name)
console.log(arr)

// console.log(arr.split(" "))




  //-----Filter method-----

//1
// let arr=persons.filter((item)=>Number(item.mass)>=100)
// console.log(arr)

//2
// let arr=persons.filter((item)=>item.height<200)
// console.log(arr)

//3
// let arr=persons.filter((item)=>item.gender==="male")
// console.log(arr)

//4
// let arr=persons.filter((item)=>item.gender==="female")
// console.log(arr)




  //-----Sort method-----

//1
// let arr=persons.map((item)=>Number(item.mass)).sort((x,y)=>x-y)
// console.log(arr)

//2
// let arr=persons.map((item)=>Number(item.height)).sort((x,y)=>x-y)
// console.log(arr)

//3
// let arr=persons.map((item)=>item.name).sort()
// console.log(arr)

//4
// let arr=persons.map((item)=>item.gender).sort()
// console.log(arr)




  //-----Every method-----

//1
// let arr = persons.every((item)=>item.eye_color==="blue")
// console.log(arr)

//2
// let arr = persons.every((item)=>item.mass>=40)
// console.log(arr)

//3
// let arr = persons.every((item)=>item.height<=200)
// console.log(arr)

//4
// let arr = persons.every((item)=>item.gender==="male")
// console.log(arr)




  //-----Some method-----

  //1
// let arr = persons.some((item)=>item.gender==="male")
// console.log(arr)

//2
// let arr = persons.some((item)=>item.eye_color==="blue")
// console.log(arr)

//3
// let arr = persons.some((item)=>item.height>=210)
// console.log(arr)

//4
// let arr = persons.some((item)=>item.mass<=50)
// console.log(arr)