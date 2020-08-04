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
        firstForecast = []

        $.ajax({
            url: queryForecastURL,
            method: "GET"
        }).then(function (response) {
            let day1Date = $("#futureDateResponse1").text(response.list[1].clouds.dt_txt)
            let day1Temp = $("#futureTempResponse1").text("High: " + response.list[1].main.temp_max)
            let day1Humidity = $("#futureHumidityResponse1").text("Humidity: "+ response.list[1].main.humidity)
            let firstForecast = $("#firstForecast")
            firstForecast.append(day1Date, day1Temp, day1Humidity)
            console.log(response)

        })
    }
    renderFuture();
})
