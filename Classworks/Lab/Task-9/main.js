"use strict";


const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
  ];

//task-1(filter method)

//  let arr = inventors.filter((obj)=>obj.year>=1500&&obj.year<=1600)
//  console.log(arr)



//task-2(map method)

//  let arr = inventors.map((obj)=>obj.first + " " + obj.last)
//  console.log(arr)



//task-3(sort method)

// let arr = inventors.map((obj)=>obj.year).sort((x,y)=>y-x)
// console.log(arr)



//task-4(reduce method)

// let arr1 = inventors.map((obj)=>obj.passed-obj.year)
// let arr2 = arr1.reduce((acc,curr)=>acc+curr)
// console.log(arr2)



//task-5(every method)

// let arr = inventors.every((obj)=>(obj.passed-obj.year)>45)
// console.log(arr)



//task-6(some method)

// let arr = inventors.some((item)=>(item.passed-item.year)>45)
// console.log(arr)







