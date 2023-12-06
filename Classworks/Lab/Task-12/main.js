"use strict"

const all_faq_item=document.querySelectorAll(".faq_item")
const faq_item_icon_item=document.querySelectorAll(".faq_item_icon_item")
const faq_item_answer=document.querySelectorAll(".faq_item_answer")
const clicked=document.querySelector(".clicked")

all_faq_item.forEach(function(faq_item_answer){
    faq_item_answer.addEventListener('click',function(){
        this.classList.toggle("clicked")
    })
})

// console.log(all_faq_item)