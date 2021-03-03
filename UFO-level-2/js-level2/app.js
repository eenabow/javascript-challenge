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