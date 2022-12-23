
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
    "https://api.shutterstock.com/v2/images/search?image_type=photo&category=outfit&per_page=500&image_type=photo&people_age=20s&people_number=1&query=" +
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
      returnedImages.data[randomNumber].assets.preview.url;
  }
}

//TODO: update
// Transalation object that sets image search parameters
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
  snow: "adult snow cat",
  rain: "adult rain clothes",
  spring: "adult spring clothes",
  summer: "adult summer clothes",
  warmrain: "adult warm rain clothes",
};



// Weather API variables
let APIKey = "NTQ98KVPDV7PY54XFFEGJ4AT3";

let cityInput = document.querySelector("location");
let citySearched = "";
let dateInput = document.querySelector("dateInput");
let dateSearched = "";
let weatherData = "";

function setWeather() {
  fetch(weatherData)
    .then(function (response) {
      return response.JSON();
    })
    .then(function (weatherConditions) {
      let temperature = weatherConditions.temp;
      let feelsLike = weatherConditions.feelslike;
      let conditionsToday = weatherConditions.conditions;
      
      console.log(temperature, feelsLike, conditionsToday);
    });
}
// event listener for search buttonn
document.addEventListener(
  "DOMContentLoaded",
  function () {
    let searchBtn = document.querySelector("#searchBtn");

    searchBtn.addEventListener("click", function () {
      citySearched = cityInput.value;
      dateSearched = dateInput.value;

      weatherData =
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        citySearched +
        "?unitGroup=us&elements=" +
        dateSearched +
        "%2Ctemp%2Cconditions&include=days%2Ccurrent" + 
        APIKey +
        "&contentType=json";
      //setWeather();
      getImageObj(searchObj[weatherTranslationObj["hot"]["clear"]]);
    });
  },
  false
);

// people_gender; Valid values: male, female, both
