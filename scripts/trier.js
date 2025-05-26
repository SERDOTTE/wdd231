const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');

const apiKey = '0e48f1e126c0f673a2b17d02fad3a944';
const lat = 49.7499;
const lon = 6.6432;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function fetchWeather() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    
    // Update DOM with weather data
    currentTemp.textContent = data.main.temp;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.src = icon;
    weatherIcon.alt = data.weather[0].description;
    captionDesc.textContent = data.weather[0].description;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    currentTemp.textContent = 'N/A';
    captionDesc.textContent = 'Unable to fetch weather data';
  }
}

fetchWeather();