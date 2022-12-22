
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

