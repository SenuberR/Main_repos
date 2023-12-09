




// for( let i=1; i<=100; i++){

// if(){
//     console.log("true",  i)
// }

// }


// function loop ( a ){

//     for( let i=1; i<=a; i++){

//         if(i%2==1){
//             console.log(i)
//         }
//     } 
// }

// console.log(loop(10))

// let click=document.querySelector(".btn")

// click.addEventListener('click', function(){
//     console.log(prompt ("hello"))
// })


const all_data=document.querySelector(".all_data")
const one_data=document.querySelector(".one_data")


all_data.addEventListener('click',function(){

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(json=>console.log(json))
})

one_data.addEventListener('click',function(){

    fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then(res=>res.json())
    .then(json=>console.log(json))
})
