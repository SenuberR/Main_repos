
const input = document.querySelector(".box_input");
const key='f15f6ad3e742d90a47a05c7983f3dc0f'
// let box=document.querySelector('.box')
// let active=document.querySelector('.active')

input.addEventListener("keypress", (e) => {
  if ((e.keyCode = "13")) {
    // console.log(input.value)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric&lang=az`
    ).then((res) => res.json())
    .then((data)=>displayWeather(data))
  }
});


function displayWeather(data) {
    const box = document.querySelector('.box');
    box.innerHTML = `
        <h1>${data.name}, ${data.sys.country}</h1>
        <h3>${Math.round(data.main.temp)}°</h3>
        <p> ${data.weather[0].description}</p>
    `;
}