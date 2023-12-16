

const btn_get=document.querySelector(".btn_get")
const btn_post=document.querySelector(".btn_post")
const btn_put=document.querySelector(".btn_put")
const btn_del=document.querySelector(".btn_del")


// btn_get.addEventListener('click',()=>{
//     fetch('https://dummyjson.com/products')
//     .then(res=>res.json())
//     .then(json=>console.log(json))
// })

// btn_post.addEventListener('click',()=>{
//     fetch('https://dummyjson.com/products',{
//         method:"POST",
//         body: JSON.stringify({
//             title: "Phone name",
//             price:126,
//             category:"Phone category"
//         }),
//         headers:{
//             'Content-Type': 'application/json'
//         }
//     })
// })

btn_put.addEventListener('click',()=>{
    fetch('https://dummyjson.com/products',{
        method:"PUT",
        body: JSON.stringify({
            title: "Phone name",
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    })
})

btn_del.addEventListener('click',()=>{
   fetch('https://dummyjson.com/products',{
    method:"DELETE"
   }).then(res => res.json()).then(console.log)
})