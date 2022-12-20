// Variable to store the API key for shuttershock
const clothingKey =
  "v2/ZDNjMjJHOWc4OXpHVFVrdjJ4d3dnWTdKbmJyQXZIUEovMzY5OTA4NDk3L2N1c3RvbWVyLzQvYlpzdFB0TVZEMVp2VGpta2Q3NzM1LWNDS3ZOZTBNeWo5NFp3T0tBQVZCRk9RekZVQVlxa05tcENQSmtoRGZRNUhXZkpIX0VkSzlHbXZBel9PS2lNWGp4SjlUZFNKMDlUWGJPTEdVUGdVakszWm9qMkZjM3BMUjZuWWNIVTNrYjJuVGhneTJDZzQ1NW5kRjg4by1LOEJkQUMzb0k5TkY5UGIxWG1qVzZkQnBnQ0FnQUVkcXhtTkJGQWluY19PbWxtTWlaeS1ucGVYZmtCSnR2QW9GaHRKdy8ycmJrbXhETTdlUDJOOHF3eTlrRHR3";

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let option5 = document.getElementById("option5");
let option6 = document.getElementById("option6");

var returnedImages;
function getImageObj(searchString) {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer v2/ZDNjMjJHOWc4OXpHVFVrdjJ4d3dnWTdKbmJyQXZIUEovMzY5OTA4NDk3L2N1c3RvbWVyLzQvYlpzdFB0TVZEMVp2VGpta2Q3NzM1LWNDS3ZOZTBNeWo5NFp3T0tBQVZCRk9RekZVQVlxa05tcENQSmtoRGZRNUhXZkpIX0VkSzlHbXZBel9PS2lNWGp4SjlUZFNKMDlUWGJPTEdVUGdVakszWm9qMkZjM3BMUjZuWWNIVTNrYjJuVGhneTJDZzQ1NW5kRjg4by1LOEJkQUMzb0k5TkY5UGIxWG1qVzZkQnBnQ0FnQUVkcXhtTkJGQWluY19PbWxtTWlaeS1ucGVYZmtCSnR2QW9GaHRKdy8ycmJrbXhETTdlUDJOOHF3eTlrRHR3"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  fetch(
    "https://api.shutterstock.com/v2/images/search?category=fashion picture&per_page=500&query=" +
      searchString,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      returnedImages = data;
      console.log(data);
    })
    .catch((error) => console.log("error", error));
}
function randomImage() {
  let length = returnedImages.data.length;
  console.log(length);
  let randomNumber = Math.floor(Math.random() * (length - 1));
  console.log(randomNumber);
  document.getElementById("option1img").src =
    returnedImages.data[randomNumber].assets.preview_1000.url;
}
// Object of weather types
weatherObj = {
rain: "wet rainy waterproof",
overcast: "overcast ",
clouds: "clouds",
snow: "snow",
sun: "sun",
mist: "mist",
thunderstorm: "thunderstorm",
clear sky: "clear sky",
drizzle: "drizzle",
clear: "clear",
};

//  502x711
// --photo----
// link to portfolio



// have to call:
// getImageObj("hot summer clothing")
// then returnedImages()
