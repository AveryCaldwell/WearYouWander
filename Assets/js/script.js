// WEATHER SCRIPT
let APIKey = "NTQ98KVPDV7PY54XFFEGJ4AT3"

let citySearched = " "
let weatherData = " "
let searchBtn = document.querySelector("searchBtn")

searchBtn.addEventListener("click", function() {
    citySearched = citySearched.value

    weatherData = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + citySearched + APIKey + "&contentType=json"
})

function setWeather() {

    fetch(weatherData)
    .then((function (response)){
        return response.JSON()
    })
    .then((function (weatherConditions)){

        let temperature = weatherConditions.temp
        let conditionsToday = weatherConditions.conditions
        let precipitation = weatherConditions.precip
        let precipitationType = weatherConditions.preciptype
        let wind = weatherConditions.windspeed

    })
}

/*
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/united%20states?unitGroup=us&include=days%2Ccurrent&key=NTQ98KVPDV7PY54XFFEGJ4AT3&contentType=json", {
  "method": "GET",
  "headers": {
  }
  })
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});

{
 "queryCost": 1,
 "latitude": 38.8904,
 "longitude": -77.032,
 "resolvedAddress": "United States",
 "address": "united states",
 "timezone": "America/New_York",
 "tzoffset": -5,
 "days": [
  {
   "datetimeEpoch": 1671598800,
   "temp": 35.5,
   "feelslike": 33,
   "precip": 0,
   "preciptype": null,
   "windspeed": 10.5,
   "conditions": "Partially cloudy",
   "icon": "partly-cloudy-day"
  }
 ],
 "currentConditions": {
  "datetimeEpoch": 1671679200,
  "temp": 34.4,
  "feelslike": 34.4,
  "precip": 0,
  "preciptype": null,
  "windspeed": 0,
  "conditions": "Clear",
  "icon": "clear-night"
 }
}

*/


// START OF IMAGE/CLOTHING SCRIPT 

// variable to store the API key for shuttershock
const clothingKey =
  "v2/ZDNjMjJHOWc4OXpHVFVrdjJ4d3dnWTdKbmJyQXZIUEovMzY5OTA4NDk3L2N1c3RvbWVyLzQvYlpzdFB0TVZEMVp2VGpta2Q3NzM1LWNDS3ZOZTBNeWo5NFp3T0tBQVZCRk9RekZVQVlxa05tcENQSmtoRGZRNUhXZkpIX0VkSzlHbXZBel9PS2lNWGp4SjlUZFNKMDlUWGJPTEdVUGdVakszWm9qMkZjM3BMUjZuWWNIVTNrYjJuVGhneTJDZzQ1NW5kRjg4by1LOEJkQUMzb0k5TkY5UGIxWG1qVzZkQnBnQ0FnQUVkcXhtTkJGQWluY19PbWxtTWlaeS1ucGVYZmtCSnR2QW9GaHRKdy8ycmJrbXhETTdlUDJOOHF3eTlrRHR3";

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let option5 = document.getElementById("option5");
let option6 = document.getElementById("option6");

// This function gets an image from the searched string
let returnedImages;
function getImageObj(searchString) {
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer v2/ZDNjMjJHOWc4OXpHVFVrdjJ4d3dnWTdKbmJyQXZIUEovMzY5OTA4NDk3L2N1c3RvbWVyLzQvYlpzdFB0TVZEMVp2VGpta2Q3NzM1LWNDS3ZOZTBNeWo5NFp3T0tBQVZCRk9RekZVQVlxa05tcENQSmtoRGZRNUhXZkpIX0VkSzlHbXZBel9PS2lNWGp4SjlUZFNKMDlUWGJPTEdVUGdVakszWm9qMkZjM3BMUjZuWWNIVTNrYjJuVGhneTJDZzQ1NW5kRjg4by1LOEJkQUMzb0k5TkY5UGIxWG1qVzZkQnBnQ0FnQUVkcXhtTkJGQWluY19PbWxtTWlaeS1ucGVYZmtCSnR2QW9GaHRKdy8ycmJrbXhETTdlUDJOOHF3eTlrRHR3"
  );

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  // fetches API url with specific parameters
  fetch(
    "https://api.shutterstock.com/v2/images/search?image_type=photo&category=outfit&per_page=500&query=" +
      searchString,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      returnedImages = data; // returnedImages will be used as data in the next function
      console.log(data);
      randomImage();
    })
    .catch((error) => console.log("error", error));
}

// This function selects a random image from the searchString
function randomImage() {
  let length = returnedImages.data.length;
  let randomNumber;
  for (i = 1; i < 7; i++) {
    randomNumber = Math.floor(Math.random() * (length - 1));
    document.getElementById("option" + i + "img").src =
      returnedImages.data[randomNumber].assets.preview_1000.url;
  }
}

const weatherTranslationObj = {
  cold: {
    wet: "rain",
    snow: "snow",
    clear: "snow",
  },
  medium: { wet: "rain", clear: "spring" },
  hot: { wet: "warmrain", clear: "summer" },
};
const searchObj = {
  snow: "adult snow clothes",
  rain: "adult rain clothes",
  spring: "adult spring clothes",
  summer: "adult summer clothes",
  warmrain: "adult warm rain clothes",
};

// have to call:
//getImageObj(searchObj[weatherTranslationObj["cold"]["snow"]])
// getImageObj("hot summer clothing")
// then returnedImages()

// This object search categories for weather types
// searchObj = {
//   rain: "adult rain clothes", //wet stormy weather
//   overcast: "autumn clothing", //fall weather 
//   clouds: "fall outfit cool outfit",
//   snow: "warm outerwear winter clothing", //cold weather
//   sun: "summer outfit",
//   mist: "rainy day clothing",
//   thunderstorm: "windy rain clothes",
//   clearsky: "summer spring clothes",
//   drizzle: "waterproof outfit",
//   clear: "spring outfit",
// };