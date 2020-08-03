var cities = [];

$("#city-search").on("click", function (event) {
  
    event.preventDefault();

    var city = $("#city-input").val().trim();
 
    cities.push(city);

    function renderCurrent() {
        let queryCurrentURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=fd73bc6942c36030c1068acea87dfea3&units=imperial"

        $.ajax({
            url: queryCurrentURL,
            method: "GET"
        }).then(function (response) {
            let currentTemp = $("#tempResponse").text("Temperature: " + response.main.temp)
            let currentHumidity = $("#humidityResponse").text("Humidity: " + response.main.humidity)
            let currentWind = $("#windResponse").text("Wind speed: " + response.wind.speed)
            let currentWeather = $("#currentWeather")
            currentWeather.append(currentTemp, currentHumidity, currentWind)
        })
    };
    renderCurrent();



function renderFuture() {

    let queryForecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=fd73bc6942c36030c1068acea87dfea3&units=imperial"

    $.ajax({
        url: queryForecastURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

    })
}
renderFuture();
})
