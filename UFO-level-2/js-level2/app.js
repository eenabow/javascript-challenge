// Get data from data.js
var tableData = data;
var columns = ["datetime", "city", "state", "country", "shape", "minutes", "comment"]

// Get a reference to the table body, user input values, and button in html
var tbody = d3.select("tbody");
var button = d3.select('#filter-btn');
var inputDate = d3.select('#datetime');
var inputCity = d3.select('#city');
var inputState = d3.select('#state');
var inputCountry = d3.select('#country');
var inputShape = d3.select('#shape');

// Input the data into index.html
function buildTable(applicableData) {
    tbody.html("");
    applicableData.forEach((UFOsighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOsighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

buildTable(tableData);

function filterTable() {
    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value").toLowerCase();
    var stateValue = inputState.property("value").toLowerCase();
    var countryValue = inputCountry.property("value").toLowerCase();
    var shapeValue = inputShape.property("value").toLowerCase();

    // Prevent page from refreshing
    // d3.event.preventDefault();

    // Create a filter function for datetime

    tbody.html("");

    filteredData = tableData;
    console.log(dateValue, cityValue, stateValue, countryValue, shapeValue)

    if (dateValue) {
        filteredData = filteredData.filter(row => row.datetime === dateValue);
    };
    if (cityValue) {
        filteredData = filteredData.filter(row => row.city === cityValue);
    };
    if (stateValue) {
        filteredData = filteredData.filter(row => row.state === stateValue);
    };
    if (countryValue) {
        filteredData = filteredData.filter(row => row.country === countryValue);
    };
    if (shapeValue) {
        filteredData = filteredData.filter(row => row.shape === shapeValue);
    };

    buildTable(filteredData);
};


// Assign handler function to objects in the HTML file == button and form
button.on("click", filterTable);



// buildTable(filteredData);