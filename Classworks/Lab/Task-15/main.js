let submit = document.querySelector(".submit");
let reset = document.querySelector(".reset");
let result = document.querySelector("#result");

submit.addEventListener("click", ()=>{
  let weight = document.querySelector(".weight").value;
  let height = document.querySelector(".height").value;
  let heightInMetr = height / 100;
  let calculate = (weight / heightInMetr ** 2).toFixed(2);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert('Please enter valid weight and height.');
    return;
  }
  console.log(calculate);
  
});


function resultBMI(bmi){
    if(bmi<18.5){
        result.innerHTML='Under Weight'
    }
    else if(bmi>= 18.5 && bmi < 24.9){
        result.innerHTML='Normal weight'
    }
    else if(bmi>= 25 && bmi < 29.9){
        result.innerHTML='Overweight'
    }
    else{
        result.innerHTML='Obesity'
    }
}
resultBMI()

