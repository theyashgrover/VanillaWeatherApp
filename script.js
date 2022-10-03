require('dotenv').config();

let API_KEY = process.env.API_KEY; //add your own API key from open weather map api here 

const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const finalUrl = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  const weatherPromise = fetch(finalUrl)
  return weatherPromise.then((response) => {
    return response.json()
  })
}
// console.log(getWeatherData('moradabad'))

const searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((res)=>{
    showWeatherData(res);
  }).catch((error)=>{
    console.log(error);
    console.log("Something happend");
  })
}

 showWeatherData = (weatherData) => {
   document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}

