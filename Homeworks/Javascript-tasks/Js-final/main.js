let headerIcon=document.querySelector('.header_icon')
let body=document.querySelector('body')
let closeIcon=document.querySelector('.tab_header_close_icon')

headerIcon.addEventListener('click',()=>{
    body.classList.add('show_tab_cart')
})
closeIcon.addEventListener('click',()=>{
    body.classList.remove('show_tab_cart')
})
