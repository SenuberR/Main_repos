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

    // const arr = persons.filter((item)=>Number(item.mass)>=100);
    // const arr = persons.filter((item)=>item.gender==="male");
    // const arr = persons.every((item)=>item.gender==="male");
    const arr = persons.filter((item)=>item.eye_color=="blue");
    let arr2= arr.map((i)=>`height ${i.height}, name ${i.name}`)

console.log(arr2)


  

 