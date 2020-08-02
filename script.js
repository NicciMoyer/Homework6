// Initial array of cities
var cities = [];

// Function for displaying city data
function renderCities() {

    // Deleting the city buttons prior to adding new city buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#cities-view").empty();

    // Looping through the array of cities
    for (var i = 0; i < cities.length; i++) {

        // Then dynamicaly generating buttons for each city in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class
        a.addClass("city");
        // Adding a data-attribute with a value of the city at index i
        a.attr("data-name", cities[i]);
        // Providing the button's text with a value of the city at index i
        a.text(cities[i]);
        // Adding the button to the HTML
        $("#cities-view").append(a);
    }
}
// This function handles events where one button is clicked
$("#city-search").on("click", function (event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var city = $("#city-input").val().trim();
    // The city from the textbox is then added to our array
    cities.push(city);

    // calling renderCities which handles the processing of our city array
    renderCities();
});

// Calling the renderCities function at least once to display the initial list of cities
renderCities();