// variable to store the API key for shuttershock
const clothingKey =
  "v2/ZDNjMjJHOWc4OXpHVFVrdjJ4d3dnWTdKbmJyQXZIUEovMzY5OTA4NDk3L2N1c3RvbWVyLzQvYlpzdFB0TVZEMVp2VGpta2Q3NzM1LWNDS3ZOZTBNeWo5NFp3T0tBQVZCRk9RekZVQVlxa05tcENQSmtoRGZRNUhXZkpIX0VkSzlHbXZBel9PS2lNWGp4SjlUZFNKMDlUWGJPTEdVUGdVakszWm9qMkZjM3BMUjZuWWNIVTNrYjJuVGhneTJDZzQ1NW5kRjg4by1LOEJkQUMzb0k5TkY5UGIxWG1qVzZkQnBnQ0FnQUVkcXhtTkJGQWluY19PbWxtTWlaeS1ucGVYZmtCSnR2QW9GaHRKdy8ycmJrbXhETTdlUDJOOHF3eTlrRHR3";

// Variables for images of clothing
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

let cityInput = document.querySelector("locationInput");
let citySearched = "";
let dateInput = document.querySelector("dateInput");
let dateSearched = "";
let weatherData = "";

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
        "%2Ctemp%2Cfeelslike%2Cconditions&include=days%2Cstatsfcst%2Cfcst%2Ccurrent&key=" +
        APIKey +
        "&contentType=json";
      //setWeather();
      getImageObj(searchObj[weatherTranslationObj["hot"]["clear"]]);
    });
  },
  false
);

function setWeather() {
  fetch(weatherData) 
     .then(function (response) {
      return response.JSON();
    })
    
    .then(function (weatherConditions) {
      let historicalFcst = weatherConditions.statsfcst;
      let temperature = weatherConditions.temp;
      let feelsLike = weatherConditions.feelslike;
      let conditionsToday = weatherConditions.conditions;
      
      console.log(historicalFcst, temperature, feelsLike, conditionsToday);
    });


// people_gender; Valid values: male, female, both


const buttonElem = document.querySelector('.searchBtn');
const modalElen = document.querySelector('.container')

modalElen.getElementsByClassName.cssText = `
display:flex;
visibility:hidden;
opacity:0;
transition:opacity 300ms easy-in-out;
`;
const openModal =()=>{
  modalElen.style.visibility = 'visible';
  modalElen.style.opacity =1;
}
openModal()

/* 
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/united%20states?unitGroup=us&elements=datetime%2Ctemp%2Cfeelslike%2Cconditions&include=days%2Cstatsfcst%2Cfcst%2Ccurrent&key=NTQ98KVPDV7PY54XFFEGJ4AT3&contentType=json", {
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


JSON response would be:
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
   "datetime": "2022-12-22",
   "datetimeEpoch": 1671685200,
   "temp": 53,
   "feelslike": 53,
   "conditions": "Rain, Overcast"
  }
 ],
 "currentConditions": {
  "datetime": "23:10:00",
  "datetimeEpoch": 1671768600,
  "temp": 53.7,
  "feelslike": 53.7,
  "conditions": "Overcast"
 }
} */
