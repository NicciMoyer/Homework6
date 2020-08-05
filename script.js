var cities = [];

//This will handle the search function for a specific city
$("#city-search").on("click", function (event) {

    event.preventDefault();
    var city = $("#city-input").val().trim();
    cities.push(city);

    //This function will gather data to show the current weather
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

    //This function will gather data to show the 5-day forecast
    function renderFuture() {

        let queryForecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=fd73bc6942c36030c1068acea87dfea3&units=imperial"
        forecastBox = []

        $.ajax({
            url: queryForecastURL,
            method: "GET"
        }).then(function (response) {
            let day1Date = $("#futureDateResponse1").text(response.list[1].clouds.dt_txt)
            let day1Temp = $("#futureTempResponse1").text("High: " + response.list[1].main.temp_max)
            let day1Humidity = $("#futureHumidityResponse1").text("Humidity: " + response.list[1].main.humidity)
            let firstForecast = $("#firstForecast")
            firstForecast.append(day1Date, day1Temp, day1Humidity)
            console.log(response)
        })
        $.ajax({
            url: queryForecastURL,
            method: "GET"
        }).then(function (response) {
            let day2Date = $("#futureDateResponse2").text(response.list[2].clouds.dt_txt)
            let day2Temp = $("#futureTempResponse2").text("High: " + response.list[2].main.temp_max)
            let day2Humidity = $("#futureHumidityResponse2").text("Humidity: " + response.list[2].main.humidity)
            let secondForecast = $("#secondForecast")
            secondForecast.append(day2Date, day2Temp, day2Humidity)
            console.log(response)
        })
        $.ajax({
            url: queryForecastURL,
            method: "GET"
        }).then(function (response) {
            let day3Date = $("#futureDateResponse3").text(response.list[3].clouds.dt_txt)
            let day3Temp = $("#futureTempResponse3").text("High: " + response.list[3].main.temp_max)
            let day3Humidity = $("#futureHumidityResponse3").text("Humidity: " + response.list[3].main.humidity)
            let thirdForecast = $("#thirdForecast")
            thirdForecast.append(day3Date, day3Temp, day3Humidity)
            console.log(response)
        })
        $.ajax({
            url: queryForecastURL,
            method: "GET"
        }).then(function (response) {
            let day4Date = $("#futureDateResponse4").text(response.list[4].clouds.dt_txt)
            let day4Temp = $("#futureTempResponse4").text("High: " + response.list[4].main.temp_max)
            let day4Humidity = $("#futureHumidityResponse4").text("Humidity: " + response.list[4].main.humidity)
            let fourthForecast = $("#fourthForecast")
            fourthForecast.append(day4Date, day4Temp, day4Humidity)
            console.log(response)
        })
        $.ajax({
            url: queryForecastURL,
            method: "GET"
        }).then(function (response) {
            let day5Date = $("#futureDateResponse5").text(response.list[5].clouds.dt_txt)
            let day5Temp = $("#futureTempResponse5").text("High: " + response.list[5].main.temp_max)
            let day5Humidity = $("#futureHumidityResponse5").text("Humidity: " + response.list[5].main.humidity)
            let fifthForecast = $("#fifthForecast")
            fifthForecast.append(day5Date, day5Temp, day5Humidity)
            console.log(response)
        })
    }
    renderFuture();
})

//I tried to get for loops to work for my forecst, to keep my code dry, but I couldn't get them to work         
        // $.ajax({
        //     url: queryForecastURL,
        //     method: "GET"
        // }).then(function (response) {
        //     i=[]
        //     let futureDate = $("#futureDateResponse").text(response.list[i].clouds.dt_txt)
        //     for (let i = 0; i < futureDate.length; i++) {
        //         const elementDate = futureDate[i];

        //     }
        //     let futureTemp = $("#futureTempResponse").text("High: " + response.list[i].main.temp_max)
        //     for (let i = 0; i < futureTemp.length; i++) {
        //         const elementTemp = futureTemp[i];

        //     }
        //     let futureHumidity = $("#futureHumidityResponse").text("Humidity: " + response.list[i].main.humidity)
        //     for (let i = 0; i < futureHumidity.length; i++) {
        //         const elementHumidity = futureHumidity[i];

        //     }
        //     let forecastBox = $("#forecastBox")
        //     forecastBox.append(elementDate, elementHumidity, elementTemp)
        //     // console.log(response)
        // })
