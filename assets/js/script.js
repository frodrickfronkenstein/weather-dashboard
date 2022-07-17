const APIKey = "1c0b296429a846ab169e7fc204e8759b";
var currentWeatherEl = document.querySelector("#current-weather");

function getWeather() {
    var lat = "42.32";
    var lon = "-79.79";
    var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=" + APIKey + "&units=metric"

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        var currentTemp = data.current.feels_like;
        var currentWind = data.current.wind_speed;
        var currentHum = data.current.humidity;
        var currentUV = data.current.uvi;

        //display current weather
       var displayTemp = document.createElement("p");
       displayTemp.innerHTML = "Temperature: " + currentTemp + " C";
       currentWeatherEl.append(displayTemp);

       var displayWind = document.createElement("p");
       displayWind = "Wind Speed: " + currentWind + "m/s";
       currentWeatherEl.append(displayWind);

       var displayHum = document.createElement("p");
       displayHum = "Humidity: " + currentHum + "%";
       currentWeatherEl.append(displayHum);

       var displayUV = document.createElement("p");
       displayUV = "UV index: " + currentUV;
       currentWeatherEl.append(displayUV);

    
    });
}

getWeather();