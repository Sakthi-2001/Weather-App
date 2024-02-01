console.log("Script is running");

const apiKey = "4c94dd2f5415f800feecf7a6d2eb56c9";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

try{const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//Async function to fetch the data by API id
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  //checking for 404 status to display error message
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } 
  else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    //updating the weather condition image
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    //giving style block when "searchBox" gets clicked
    document.querySelector(".weather").style.display = "block";

    //giving style none when "searchBox" gets clicked
    document.querySelector(".error").style.display = "none";
  }
}
// Step 1: Include the audio file
const audioFile = 'sounds/sound1.wav';

// Step 2: Create an audio object
const audio = new Audio(audioFile);

//when people will click on the search button "searchBox" send the city infomation in this "checkWeather()"
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value); //it will give the value of city name written in the input field
  audio.play()
});

searchBox.addEventListener("keypress",function(e){
  //keyCode = 13 represents "Enter" key
  if(e.keyCode===13){
    checkWeather(searchBox.value)
    audio.play();
  }
})

// get both pupils
const pupils = document.querySelectorAll(".eye .pupil");
window.addEventListener("mousemove", (e) => {
  pupils.forEach((pupil) => {
    // get x and y postion of cursor
    var rect = pupil.getBoundingClientRect();
    var x = (e.pageX - rect.left) / 30 + "px";
    var y = (e.pageY - rect.top) / 30 + "px";
    pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
  });
});}
catch(error){
  console.error(error.message);
  console.log("This is home page")
}



function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  clockElement.innerHTML = formattedTime;
}

// Initial call to update the clock
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

var x=document.getElementById("hands");
var y=document.getElementById("animcon");
function closeye()
{
 y.style.backgroundImage="url('images/monkey_pwd.gif')";
 x.style.marginTop="0%";
}
function openeye()
{
 y.style.backgroundImage="url('images/monkey.gif')";
 x.style.marginTop="110%";
}


