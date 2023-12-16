

let open_modal=document.querySelector('.open_modal')
let box=document.querySelector('.box')
let modal=document.querySelector('.modal')
let icon=document.querySelector('.modal_with_icon_item')
let btn_left=document.querySelector('.modal_btns_left')
let btn_right=document.querySelector('.modal_btns_right')
let input=document.querySelector('.modal_input')

open_modal.addEventListener('click',function(){
    box.classList.add('modal')
})

icon.addEventListener('click',function(){
box.classList.remove('modal')
})

btn_left.addEventListener('click',function(){
    box.classList.remove('modal')
})
btn_right.addEventListener('click',function(){
    let value = input.value;
    console.log('Input value:', value)
})
