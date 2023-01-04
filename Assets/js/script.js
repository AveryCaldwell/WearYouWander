// Variable to store the API key for shuttershock
const clothingKey =
  'v2/ZDNjMjJHOWc4OXpHVFVrdjJ4d3dnWTdKbmJyQXZIUEovMzY5OTA4NDk3L2N1c3RvbWVyLzQvYlpzdFB0TVZEMVp2VGpta2Q3NzM1LWNDS3ZOZTBNeWo5NFp3T0tBQVZCRk9RekZVQVlxa05tcENQSmtoRGZRNUhXZkpIX0VkSzlHbXZBel9PS2lNWGp4SjlUZFNKMDlUWGJPTEdVUGdVakszWm9qMkZjM3BMUjZuWWNIVTNrYjJuVGhneTJDZzQ1NW5kRjg4by1LOEJkQUMzb0k5TkY5UGIxWG1qVzZkQnBnQ0FnQUVkcXhtTkJGQWluY19PbWxtTWlaeS1ucGVYZmtCSnR2QW9GaHRKdy8ycmJrbXhETTdlUDJOOHF3eTlrRHR3';

// This function gets an image from the searched string
let returnedImages;
function getImageObj(searchString) {
  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + clothingKey);

  let requestOptions = {
    // GET is used to request data from a specified resource.
    method: 'GET',
    // headers required to be sent while using stutterstock API
    headers: myHeaders,

    redirect: 'follow',
  };
  // Clothing style selection
  let peopleGender;
  const clothingStyle = document.getElementById('clothingStyle').value;
  if (clothingStyle !== 'both') {
    // if clothingStyle is NOT both; then the value is equal to users input
    peopleGender = `&people_gender=${
      document.getElementById('clothingStyle').value
    }`;
  } else {
    // otherwise, the value is set to empty and gender isnt specified in URL
    peopleGender = '';
  }
  // Age selection
  let peopleAge;
  const selectAge = document.getElementById('selectAge').value;
  if (selectAge != 'Any') {
    // if age is NOT entered as 'Any', then the value is equal to users input
    peopleAge = `&people_age=${selectAge}`;
  } else {
    // otherwise, the value is set to empty and age isnt specified in URL
    peopleAge = '';
  }

  // URL string
  const url = `https://api.shutterstock.com/v2/images/search?image_type=photo&category=clothing&per_page=500&image_type=photo&people_number=1${peopleGender}${peopleAge}&query=${searchString}`;
  // fetches API url with specific parameters
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      returnedImages = data; // returnedImages will be used as data in the next function
      randomImage();
    })
    .catch((error) => console.log('error', error));
}

// This function selects 6 random images from the searchString & shows 6 small thumbnails images after 500 ms (due to image load time)
function randomImage() {
  let length = returnedImages.data.length;
  let used = [];
  let randomNumber;
  if (length > 6) {
    for (i = 1; i < 7; i++) {
      randomNumber = Math.floor(Math.random() * (length - 1));
      while (used.indexOf(randomNumber) !== -1) {
        // console.log('same image');
        randomNumber = Math.floor(Math.random() * (length - 1));
      }
      used.push(randomNumber);
      document.getElementById('option' + i + 'img').src =
        returnedImages.data[randomNumber].assets.preview_1000.url;
      document.getElementById('option' + i + 'preview').src =
        returnedImages.data[randomNumber].assets.small_thumb.url;
    }
  } else {
    // Modal pops up
    searchWarning();
    for (i = 0; i < length; i++) {
      document.getElementById('option' + (i + 1) + 'img').src =
        returnedImages.data[i].assets.preview_1000.url;
      document.getElementById('option' + (i + 1) + 'preview').src =
        returnedImages.data[i].assets.small_thumb.url;
    }
    for (i = length; i < 6; i++) {
      document.getElementById('option' + (i + 1) + 'img').src =
        'assets/img/logo.png';
      document.getElementById('option' + (i + 1) + 'preview').src =
        'assets/img/logo.png';
    }
  }
  setTimeout(function () {
    initUI();
  }, 500);
}

// Transalation object that sets image search parameters
const weatherTranslationObj = {
  cold: {
    wet: 'rain',
    snow: 'snow',
    clear: 'cold',
  },
  medium: { wet: 'rain', clear: 'spring' },
  hot: { wet: 'warmrain', clear: 'summer' },
  // Temp wise dictates if it's cold,medium, or hot
};

// Object of temperature ranges
const tempRange = {
  coldMax: '40',
  mediumMax: '70',
};

// Object of weather conditions
const weatherConditions = {
  //wet
  Drizzle: 'wet',
  'Heavy Drizzle': 'wet',
  'Light Drizzle': 'wet',
  'Heavy Drizzle/Rain': 'wet',
  'Light Drizzle/Rain': 'wet',
  Fog: 'wet',
  'Dust storm': 'wet',
  'Funnel Cloud/Tornado': 'wet',
  'Hail Showers': 'wet',
  'Lightning Without Thunder': 'wet',
  Mist: 'wet',
  'Precipitation In Vicinity': 'wet',
  Rain: 'wet',
  'Rain Showers': 'wet',
  'Heavy Rain': 'wet',
  'Light Rain': 'wet',
  Thunderstorm: 'wet',
  //snow
  'Freezing Drizzle/Freezing Rain': 'snow',
  'Heavy Freezing Drizzle/Freezing Rain': 'snow',
  'Light Freezing Drizzle/Freezing Rain': 'snow',
  'Freezing Fog': 'snow',
  'Heavy Freezing Rain': 'snow',
  'Light Freezing Rain': 'snow',
  'Blowing Or Drifting Snow': 'snow',
  Ice: 'snow',
  'Heavy Rain And Snow': 'snow',
  'Light Rain And Snow': 'snow',
  Snow: 'snow',
  'Snow And Rain Showers': 'snow',
  'Snow Showers': 'snow',
  'Heavy Snow': 'snow',
  'Light Snow': 'snow',
  Squalls: 'snow',
  Hail: 'snow',
  'Diamond Dust': 'snow',
  //clear
  'Sky Coverage Decreasing': 'clear',
  'Sky Coverage Increasing': 'clear',
  'Sky Unchanged': 'clear',
  'Smoke Or Haze': 'clear',
  'Thunderstorm Without Precipitation': 'clear',
  Overcast: 'clear',
  'Partially cloudy': 'clear',
  Clear: 'clear',
};
// Converts weather data into a string and determines the translation based off temperature range
function convertWeather(weather) {
  let day = weather.days[0];
  let condition = day.conditions.split(',')[0];
  let temp = day.temp;
  let obj = {};
  if (temp <= tempRange.coldMax) {
    obj.temp = 'cold';
  } else if (temp <= tempRange.mediumMax) {
    obj.temp = 'medium';
  } else {
    obj.temp = 'hot';
  }
  obj.condition = weatherConditions[condition];
  getImageObj(searchObj[weatherTranslationObj[obj.temp][obj.condition]]);
}
// Obj of search keywords
const searchObj = {
  snow: 'snow outfit',
  rain: 'rain clothes',
  spring: 'spring outfit',
  summer: 'summer outfit',
  warmrain: 'humid outfit',
  cold: 'cold clothes',
};

// Weather API variables
let APIKey = 'NTQ98KVPDV7PY54XFFEGJ4AT3';
let cityInput = document.querySelector('#locationInput');
let citySearched;
let dateInput = document.querySelector('#dateInput');
let dateSearched;
let weatherData;

// Event listener for search button and values are stored in an object
document.addEventListener(
  'DOMContentLoaded',
  function () {
    let searchBtn = document.querySelector('#searchBtn');
    loadData();
    searchBtn.addEventListener('click', function () {
      // City and date values set from user input
      citySearched = cityInput.value;
      dateSearched = dateInput.value;
      const storeObj = {
        clothingStyle: document.getElementById('clothingStyle').value,
        selectAge: document.getElementById('selectAge').value,
        locationInput: citySearched,
        dateInput: dateSearched,
      };
      storeData(storeObj);
      weatherURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${citySearched}/${dateSearched}/${dateSearched}?unitGroup=us&elements=temp%2Cfeelslike%2Cconditions&include=days&key=${APIKey}&contentType=json`;
      getWeather(weatherURL, dateSearched);
    });
  },
  false
);

let cityWeather;
// Fetch weather data and put values into the html
function getWeather(weatherURL, dateSearched) {
  fetch(weatherURL, {
    method: 'GET',
    headers: {},
  })
    .then((response) => response.json())
    .then(function (data) {
      convertWeather(data);
      document.getElementById(
        'searchDate'
      ).innerHTML = `<strong>Date:</strong> ${dateSearched}`;
      document.getElementById(
        'searchLocation'
      ).innerHTML = `<strong>Location:</strong> ${data.resolvedAddress}`;
      document.getElementById(
        'searchTemp'
      ).innerHTML = `<strong>Temperature:</strong> ${data.days[0].temp}&deg;F`;
      document.getElementById(
        'searchCondition'
      ).innerHTML = `<strong>Weather:</strong> ${data.days[0].conditions}`;
    });
}
// if clothing images are not shown, then hide the home text, show weather pane and clothing pane
function initUI() {
  const clothing = document.getElementById('Clothing');
  const searchCurrent = document.getElementById('searchCurrent');
  const home = document.getElementById('text-home');
  if (clothing.style.display === '') {
    home.style.display = 'none';
    searchCurrent.style.display = 'block';
    clothing.style.display = 'block';
  }
}
// Stores properties in an object in local storage
function storeData(obj) {
  for (const prop in obj) {
    localStorage.setItem(prop, obj[prop]);
  }
}
// Loads data into an array
function loadData() {
  dataArray = ['clothingStyle', 'selectAge', 'locationInput', 'dateInput'];
  let value, target;
  for (i = 0; i < dataArray.length; i++) {
    value = localStorage.getItem(dataArray[i]);
    if (value !== null) {
      target = document.getElementById(dataArray[i]);
      target.value = value;
    }
  }
}
// Displays images in carousel
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementById('carousel').children;
  let dots = document.getElementsByClassName('demo');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
// Modal that pops up if not enough search results
function searchWarning() {
  let popup = new Foundation.Reveal($('#search-modal'));
  popup.open();
}
