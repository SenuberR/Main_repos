let left_icon = document.querySelector(".left_icon");
let right_icon = document.querySelector(".right_icon");
let carousel = document.querySelectorAll(".carousel");
let image_box = document.querySelectorAll(".image_box");
let img = document.querySelector(".img");
let counter = 0;
let images = [
  "cat.jpg",
  "dogs.jpg",
  "dogs.jpg",
  "giraffe.jpg",
  "panda.jpg",
  "turtle.jpg",
];

right_icon.addEventListener("click", () => {
  counter++;
  img.src = `./Animals/${images[counter]}`;
  if (counter > 0) {
    counter = images.length + 1;
  } 
  else if (counter <= images.length) {
    counter = images.length;
  }
});

left_icon.addEventListener("click", () => {
  counter--;
  img.src = `./Animals/${images[counter]}`;
  if (counter < 0) {
    counter = images.length - 1;
  } 
  else if(counter >= images.length) {
    counter = images.length;
  }
});
