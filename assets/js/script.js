const APIKey = "1c0b296429a846ab169e7fc204e8759b"

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
        //var currentTemp = 
        console.log(data.current.feels_like)
        //var currentWind = 
        console.log(data.current.wind_speed)
        //var currentHum = 
        console.log(data.current.humidity)
        //var currentUV = 
        console.log(data.current.uvi)
    });
}

getWeather();