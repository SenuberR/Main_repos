let input = document.querySelector(".taskInput");
let btn = document.querySelector(".btn");
let ul = document.querySelector(".taskList");
let li = document.createElement("li");
let icon = document.querySelector(".remove");
console.log(icon)
let arr=[]

btn.addEventListener("click", ()=>{
arr.push(input.value)
  if (input.value.length === 0) {
    alert("Please enter a plan.");
  } 
  else {
    li.innerHTML += ` <li class="li">${input.value}<i class=" remove fa-solid fa-xmark"></i></li>`;
    ul.appendChild(li);
   
  }
});

icon.addEventListener("click", ()=>{
 console.log("hello")
 ul.removeChild(li);
})
