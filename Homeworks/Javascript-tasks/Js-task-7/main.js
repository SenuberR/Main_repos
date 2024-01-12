let newBtn=document.querySelector('.new_data_btn')
let formBox=document.querySelector('.form_box')

newBtn.addEventListener('click',() => {
    formBox.classList.toggle('active')
})

let name=document.getElementsByClassName('.name').value
let email=document.getElementsByClassName('.email').value
let password=document.getElementsByClassName('.password').value

