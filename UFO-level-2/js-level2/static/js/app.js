// Get data from data.js
var tableData = data;
var columns = ["datetime", "city", "state", "country", "shape", "minutes", "comment"]

// Get a reference to the table body in index.html
var tbody = d3.select("tbody");
var button = d3.select('#filter-btn');
var form = d3.select('#form');

// Need to create input fields for below
// date/time
// city
// state
// country
// shape

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