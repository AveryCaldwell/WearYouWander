// letiable to store the API key for shuttershock
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
    "https://api.shutterstock.com/v2/images/search?category=fashionpicture&per_page=500&query=" +
      searchString,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      returnedImages = data; // returnedImage will be used as data in the next function
      console.log(data);
    })
    .catch((error) => console.log("error", error));
}

// This function selects a random image from the searchString
function randomImage() {
  let length = returnedImages.data.length;
  console.log(length);
  let randomNumber = Math.floor(Math.random() * (length - 1));
  console.log(randomNumber);
  document.getElementById("option1img").src =
    returnedImages.data[randomNumber].assets.preview_1000.url;
}

// This object holds the arrays of weather types
weatherObj = {
rain: ["rainy day outfit"],
overcast: ["autumn clothing"],
clouds: ["fall outfit", "cool outfit"],
snow: ["warm outerwear", "winter clothing"],
sun: ["summer outfit"],
mist: ["rainy day clothing"],
thunderstorm: ["windy rain clothes"],
clear sky: ["summer clothes", "spring clothes"],
drizzle: ["waterproof outfit",],
clear: ["spring outfit"],
};

// TODO: fix
  localStorage.setItem("weatherObj", weatherObj[i].toString());
      weatherObj = localStorage.getItem("weaterObj").split(",");

// have to call:
// getImageObj("hot summer clothing")
// then returnedImages()
