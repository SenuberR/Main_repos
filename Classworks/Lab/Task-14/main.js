let hours = document.getElementsByClassName(".hours");
let minute = document.getElementsByClassName(".minute");
let second = document.getElementsByClassName(".second");
// let clock=document.querySelector('clock')

// document.addEventListener('DOMContentLoaded',function(){
//     const date = new Date();
//     let hours = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
  
//     if (hours > 12 && hours === 0) {
//       hours = 12;
//     }
  
//   //   if (hours === 0) {
//   //     hours = 12;
//   //   }
  
//     if (minute < 10) {
//       minute = "0" + minute;
//     }
  
//     if (second < 10) {
//       second = "0" + second;
//     }
  
//     let time = hours + ":" + minute + ":" + second;
//     document.getElementById("clock").innerHTML = time;
// })


function newOclock() {
  const date = new Date();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (hours > 12 && hours === 0) {
    hours = 12;
  }

//   if (hours === 0) {
//     hours = 12;
//   }

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (second < 10) {
    second = "0" + second;
  }

  let time = hours + ":" + minute + ":" + second;
  document.getElementsByClassName("clock").innerHTML = time;
}
// newOclock();

setInterval(newOclock, 1000);


