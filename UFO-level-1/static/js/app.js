// Get data from data.js
var tableData = data;

var columns = ["datetime", "city", "state", "country", "shape", "minutes", "comment"]

// Get a reference to the table body in index.html
var tbody = d3.select("tbody");
var button = d3.select('#filter-btn');
// var form = d3.select('#form');

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

// Create a filter function for datetime
function filter() {
  const inputDate = d3.select('#datetime').property('value');
  let filteredData = tableData;
  if (inputDate) {
  filteredData = filteredData.filter(row => row.datetime === inputDate);
  };
  buildTable(filteredData);
};

// Assign handler function to objects in the HTML file == button and form
button.on("click", filter);

// Prevent page from refreshing
d3.event.preventDefault();
