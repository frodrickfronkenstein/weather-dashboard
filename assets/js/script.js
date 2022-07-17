const APIKey = "1c0b296429a846ab169e7fc204e8759b"

function getWeather() {
    var cityName = "Burlington";
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
    });
}

getWeather();