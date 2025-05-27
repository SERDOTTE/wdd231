//select HTML elements in the document

const myDescription = document.querySelector("#description");
const myTemperature = document.querySelector("#temperature");
const myGraphic = document.querySelector("#graphic");
const myHumidity = document.querySelector("#humidity");
const myHigh = document.querySelector("#high");
const myLow = document.querySelector("#low");
const mySunrise = document.querySelector("#sunrise");
const mySunset = document.querySelector("#sunset");

const myToday = document.querySelector("#today");
const myTomorrow = document.querySelector("#tomorrow");
const myDayAfterTomorrow = document.querySelector("#day-after-tomorrow");



//create requied variables for the URL
const myKey = "0e48f1e126c0f673a2b17d02fad3a944";
const myLat = "-29.93"; // Latitude for Canoas City
const myLon = "-51.19"; // Longitude for Canoas City

//costruct a full path using template literals
const myUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=metric`;

async function apiFetch() {
  try {
    const response = await fetch(myUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);                    // this is for testing the call
      displayResults(data);  // uncomment when ready to display
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Capitalize the first letter of each word in the description
function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

// display the json data onto my web page
function displayResults(data) {
  //  console.log('helllo')
   myTemperature.innerHTML = `${data.list[0].main.temp}&deg; C`;
   myDescription.innerHTML = capitalizeWords(data.list[0].weather[0].description);
   myHumidity.innerHTML = `Humidity: ${data.list[0].main.humidity} %`;
   myHigh.innerHTML = `High: ${data.list[0].main.temp_max}&deg;`;
   myLow.innerHTML = `Low: ${data.list[0].main.temp_min}&deg;`;
   mySunrise.innerHTML = `Sunrise: ${new Date(data.city.sunrise * 1000).toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit' }).replace(/AM|PM/, match => match.toLowerCase())}`;
   mySunset.innerHTML = `Sunset: ${new Date(data.city.sunset * 1000).toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit' }).replace(/AM|PM/, match => match.toLowerCase())}`;

   // Helper function to get the day of the week
   function getWeekDay(dt_txt) {
     const date = new Date(dt_txt);
     return date.toLocaleDateString('en-US', { weekday: 'long' });
   }

   // Today (index 0, current time)
   const todayDate = data.list[0].dt_txt;
   myToday.innerHTML = `${getWeekDay(todayDate)}: <strong>${data.list[0].main.temp}&deg; C</strong>`;

   // Tomorrow (index 8, approximately 24h later)
   const tomorrowDate = data.list[8].dt_txt;
   myTomorrow.innerHTML = `${getWeekDay(tomorrowDate)}: <strong>${data.list[8].main.temp}&deg; C</strong>`;

   // The day after tomorrow (index 16, approximately 48h later)
   const dayAfterTomorrowDate = data.list[16].dt_txt;
   myDayAfterTomorrow.innerHTML = `${getWeekDay(dayAfterTomorrowDate)}: <strong>${data.list[16].main.temp}&deg; C</strong>`;

   const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
   myGraphic.setAttribute('src', iconsrc);
   myGraphic.setAttribute('alt', data.list[0].weather[0].description);

}

// start the process
apiFetch();
