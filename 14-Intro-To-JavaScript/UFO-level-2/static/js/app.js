// worked on dedugging syntax errors with tutor. Also worked with t/a to allow filter seach to be usable 

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
    // var userInputs = [];
    // create variable for storing input date 
    // var storeValue = d3.selectAll(".form-control")
    var dateValue = d3.select("#datetime").property("value")
    var cityValue = d3.select("#city").property("value")
    var stateValue = d3.select("#state").property("value")
    var countryValue = d3.select("#country").property("value")
    var shapeValue = d3.select("#shape").property("value")
    // console.log(storeValue)
    // storeValue.forEach(userInput =>{
    //    // userInputs.push(userInput)
    //    console.log(userInput[0])
    // })
    // console.log(userInputs)
    //set variable to set a copy for data filtering
    var filterData = tableData;

    // do conditional statement to reset page when clicked button 
    if (dateValue != "") {
        filterData = filterData.filter(function (sightingRow) {
            // need a conditional statement by using a boolean, to display table row
            if (dateValue === sightingRow.datetime) { return true; }
        })
    }

    if (cityValue != "") {
        filterData = filterData.filter(function (sightingRow) {
            // need a conditional statement by using a boolean, to display table row
            if (cityValue === sightingRow.city) { return true; }
        })
    }

    if (stateValue != "") {
        filterData = filterData.filter(function (sightingRow) {
            // need a conditional statement by using a boolean, to display table row
            if (stateValue === sightingRow.state) { return true; }
        })
    }
    if (countryValue != "") {
        filterData = filterData.filter(function (sightingRow) {
            // need a conditional statement by using a boolean, to display table row
            if (countryValue === sightingRow.country) { return true; }
        })
    }
    if (shapeValue != "") {
        filterData = filterData.filter(function (sightingRow) {
            // need a conditional statement by using a boolean, to display table row
            if (shapeValue === sightingRow.shape) { return true; }
        })
    }

    createTable(filterData);


}
// call function
createTable(tableData);

// can filter by inputing a date & selecting filter table
var filterButton = d3.select("#filter-btn");
var dataEnter = d3.select("form-control");

// when enter is clicked, table resets
filterButton.on("click", filterTable);
dataEnter.on("submit", filterTable);

