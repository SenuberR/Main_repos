function one(callback) {
  setTimeout(() => {
    console.log("one"), callback();
  }, 1000);
}

function two(callback) {
  setTimeout(() => {
    console.log("two"), callback();
  }, 2000);
}

function three(callback) {
  setTimeout(() => {
    console.log("three"), callback();
  }, 3000);
}

function four() {
  setTimeout(() => {
    console.log("four");
  }, 4000);
}

// console.log(one(two(three(four()))))
console.log(one(() => two(() => three(() => four(()=>{console.log("end")})))));
