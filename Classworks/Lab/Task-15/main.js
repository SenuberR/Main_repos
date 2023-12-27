
let submit=document.querySelector('.submit')
let reset=document.querySelector('.reset')


submit.addEventListener('click',()=>{
    let weight=document.querySelector('.weight').value
    let height=document.querySelector('.height').value
    let heightInMetr = height/100
let calculate=(weight/heightInMetr**2).toFixed(2)
console.log(calculate)
})
