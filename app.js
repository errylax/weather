const show_weather = document.querySelector('#show-weather')
const apiKey = "0bee8cb25678b3f65d5bd0fa4a6e00c1"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=35.6904376826923&lon=51.47856241088179&appid=${apiKey}`


const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position=> {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        console.log(lat,lon);
      })
    }
  }

const view = () => {
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.querySelector("#temp").innerHTML = `Temp = ${data.main.temp}°C`;
    document.querySelector("#humidity").innerHTML = `Humidity = ${data.main.humidity}%`;
    document.querySelector("#pressure").innerHTML = `Pressure = ${data.main.pressure}`;
  })
}

show_weather.addEventListener("click",view)