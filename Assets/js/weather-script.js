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