// worked on dedugging code and sytax with tutor

// from data.js
var tableData = data;

// YOUR CODE HERE!
function createTable(sightings) {
    // use d3 to display table function on webpage

    tableBody.html("");

    // go through objects
    sightings.forEach(function (ufoSighting) {

        // console.log(ufoSighting);

        //set variable to store elemnts for population of table rows
        var tableRow = tableBody.append("tr");

        Object.entries(ufoSighting).forEach(function ([objectKey, ObjectValue]) {

            // console.log(objectKey, ObjectValue);

            var infoCell = tableRow.append("td");

            // append value to table
            infoCell.text(ObjectValue);
        });
    });
};

// work on filtering for table by the entered date
function filterTable() {

    d3.event.preventDefault();

    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value")

    var filterData = tableData;

    if (inputValue != "") {
        var filterData = tableData.filter(function (sightingRow) {
            // need a conditional statement by using a boolean, to display table row
            if (inputValue === sightingRow.datetime) {

                return true;
            }
        });
    };

    // creat table for data
    createTable(filterData);

};

var tableBody = d3.select("tbody");
// call function for being able to filter table
createTable(tableData);

// can filter by inputing a date & selecting filter table
var filterButton = d3.select("#filter-btn");
var dataEnter = d3.select("#datetime");

// when enter is clicked, table resets
filterButton.on("click", filterTable);
dataEnter.on("submit", filterTable);

