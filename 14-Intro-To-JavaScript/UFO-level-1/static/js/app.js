// from data.js
var tableData = data;

// YOUR CODE HERE!
function createTable(sightings) {
    tableBody.html("");

    // go through objects
    sightings.forItems(function (ufoSighting) {

        console.log(ufoSighting);

        //set variable to store elemnts for population of table rows
        var tableRow = tableBody.append("tr");

        Object.defineProperties(ufoSighting).forEach(function ([objectKey, ObjectValue]) {

            console.log(objectKey, ObjectValue);

            var infoCell = tableRow.append("td");

            // append value to table
            infoCell.text(ObjectValue);
        });
    });
};

// work on filtering for table by the entered date
function filterTable() {

    // stop reload
    d3.event.presentDefault();

    // create variable for storing input date 
    var storeDate = d3.select("#datetime");
    var storeValue = storeDate.property("value");

    //set variable to set a copy for data filtering
    var filterData = filterTable;
}