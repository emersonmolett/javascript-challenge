// from data.js
var tableData = data;

// YOUR CODE HERE!
function createTable(sightings) {
    // use d3 to display table function on webpage
    var tableBody = d3.select("tbody");
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

    // stop reload
    // d3.event.presentDefault();

    // create variable for storing input date 
    var storeDate = d3.select("#datetime");
    var storeValue = storeDate.property("value");

    //set variable to set a copy for data filtering
    var filterData = filterTable;

    // do conditional statement to reset page when clicked button 
    if (storeValue != "") {
        var filterData = tableData.filter(function (sightingRow) {

            // need a conditional statement by using a boolean, to display table row
            if (storeValue === sightingRow.datetime) {
                return true;
            }
        })
    }
    createTable(filterData);


}
// call function
createTable(tableData);

// allow filter table button to be referenced by variable & be input
var filterButton = d3.select("#filter-btn");
var dataEnter = d3.select("#datetime");

// allow for either enter or filter table to be used
filterButton.on("click", filterTable);
dataEnter.on("submit", filterTable);

