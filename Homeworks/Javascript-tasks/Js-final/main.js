let headerIcon=document.querySelector('.header_icon')
let body=document.querySelector('body')
let closeIcon=document.querySelector('.tab_header_close_icon')
let cards=document.querySelector('.cards')
let addToCartBtn=document.querySelectorAll(".btn")
let list = document.querySelector('.list')


document.addEventListener("DOMContentLoaded", ()=>{
    fetch('https://dummyjson.com/products')
    .then((res)=>res.json())
    .then((data)=>data.products.map((item)=>{
        cards.innerHTML+=`
        <div class="cards_item">
        <div class="cards_item_img">
          <img src="${item.image}" alt="" />
        </div>
        <div class="cards_item_content">
          <h3 class="card_item_content_title">${item.title}</h3>
          <p class="card_item_content_price">${item.price}</p>
          <button class="btn">Add to cart</button>
        </div>
      </div>
        `
    }))
})

headerIcon.addEventListener('click',()=>{
    body.classList.add('show_tab_cart')
})
closeIcon.addEventListener('click',()=>{
    body.classList.remove('show_tab_cart')
})
