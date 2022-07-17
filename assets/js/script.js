const APIKey = "1c0b296429a846ab169e7fc204e8759b";
var searchForm = document.querySelector("#search-form");
var currentWeatherEl = document.querySelector("#current-weather");
var searchedCityEl = document.querySelector("#searched-city");

var formSubmitHandler = function (event) {
    event.preventDefault();

    var cityName = searchedCityEl.value.trim();

    if (cityName) {
        cityLocation(cityName);
        searchedCityEl.value = "";
        console.log(cityName);
    } else {
        alert("Enter city name you want the forecast for");
    }
};

var cityLocation = function(cityName) {
    var apiGeo = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + APIKey

    fetch(apiGeo).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                getWeather(data);
            })
        }
    })
}

function getWeather(cityName) {
    console.log(cityName)
    var lat = cityName[0].lat;
    var lon = cityName[0].lon;
    var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=" + APIKey + "&units=metric"

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)

        //display location, date and icon
        var currentCity = cityName[0].name;
        var currentDate = moment().format('l');
        var currentIcon = data.current.weather[0].icon;
        var iconLibrary = "https://openweathermap.org/img/wn/" + currentIcon + ".png";

        var displayInfo = document.createElement("h2");
        displayInfo.innerHTML = currentCity + " (" + currentDate + ") " + "<img src=" + iconLibrary + ">";
        currentWeatherEl.append(displayInfo);

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

       //change background of UV index to reflect severity
    //    if (currentUV >= 0 && currentUV <=2) {
    //     displayUV.style.backgroundColor = "green";
    //    } else if (currentUV <=3 && currentUV <= 5) {
    //     displayUV.style.backgroundColor = "yellow";
    //    } else {
    //     currentUV.style.backgroundColor = "red";
    //    }

    
    });
}

searchForm.addEventListener("submit", formSubmitHandler);