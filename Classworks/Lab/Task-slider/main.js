
// let img=document.querySelector('.img')
let left_icon = document.querySelector(".icon_left");
let right_icon = document.querySelector(".icon_right");
let img=[
    "lamp.jpg",
    "mountin.jpg",
    "see.jpg"
]
let counter=0

left_icon.addEventListener('click',()=>{
    console.log('click')
    // counter--;
    // img.src = `./images/${img[counter]}`;
    // if (counter < 0) {
    //   counter = img.length - 1;
    // } 
    // else if (counter >= img.length) {
    //   counter = img.length;
    // }
})


right_icon.addEventListener('click',()=>{
    counter++;
    img.src = `./images/${img[counter]}`;
    if (counter > 0) {
      counter = img.length + 1;
    } 
    else if (counter <= img.length) {
      counter = img.length;
    }
})