// from data.js
var tableData = data;

// YOUR CODE HERE!
function createTable(sightings) {
    tableBody.html("");

    // go through objects
    sightings.forItems(function(ufoSighting) {

        console.log(ufoSighting);
    })
}