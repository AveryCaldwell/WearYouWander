
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

        let conditionsToday = weatherConditions.currentConditions
        let precipitation = weatherConditions.precip
        let precipitationType = weatherConditions.precipType
        

    })
}

/*
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
   "datetime": "2022-12-21",
   "datetimeEpoch": 1671598800,
   "tempmax": 45.8,
   "tempmin": 27.5,
   "temp": 35.5,
   "feelslike": 33.2,
   "precip": 0,
   "precipprob": 0,
   "preciptype": null,
   "snow": null,
   "windspeed": 10.5,
   "cloudcover": 56.2,
   "conditions": "Partially cloudy",
   "icon": "partly-cloudy-day",
   "hours": [
    {
     "datetime": "12:00:00",
     "datetimeEpoch": 1671642000,
     "temp": 41.9,
     "feelslike": 41.9,
     "precip": 0,
     "precipprob": 0,
     "snow": null,
     "preciptype": null,
     "windspeed": 0.4,
     "cloudcover": 22.4,
     "conditions": "Partially cloudy",
     "icon": "partly-cloudy-day"
    },
    {
     "datetime": "13:00:00",
     "datetimeEpoch": 1671645600,
     "temp": 42.9,
     "feelslike": 41.7,
     "precip": 0,
     "precipprob": 0,
     "snow": null,
     "preciptype": null,
     "windspeed": 3,
     "cloudcover": 22.4,
     "conditions": "Partially cloudy",
     "icon": "partly-cloudy-day"
    }
   ]
  }
 ],
 "currentConditions": {
  "datetime": "21:00:00",
  "datetimeEpoch": 1671674400,
  "temp": 34.8,
  "feelslike": 34.8,
  "precip": 0,
  "precipprob": 0,
  "snow": null,
  "preciptype": null,
  "windspeed": 2.8,
  "cloudcover": 0,
  "conditions": "Clear",
  "icon": "clear-night"
 }
}

*/