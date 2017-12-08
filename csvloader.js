var fs = require('fs');
var csvParse = require('csv-parse/lib/sync');
var shortHash = require('short-hash');

var csvFile = fs.readFileSync('./simplemaps-worldcities-basic-25.csv');
var cityArray = csvParse(csvFile, {columns: true});

// Add an id to each of the city records
for (i = 0; i < cityArray.length; i++) {
  var rowHash = shortHash(JSON.stringify(cityArray[i]));
  cityArray[i].id = rowHash;
}

// To match dynamoDB 'dict' type, set everything to string
for (i = 0; i < cityArray.length; i++) {
  for (var property in cityArray[i]) {
    if (cityArray[i].hasOwnProperty(property)) {
      var dictObject = new Object();
      dictObject.S = cityArray[i][property];
      cityArray[i][property] = dictObject;
    }
  }
}

// Build the PutRequest array
// TODO convert to new Object notation.
var putRequestArray = [];
for (i = 0; i < cityArray.length; i++) {
  var putRequest = {
    PutRequest: {
      Item: cityArray[i]
    }
  };
  putRequestArray.push(putRequest);
}

// Create the final dynamoDB import file
// TODO convert to new Object notation.
var dynamoDBFile = {
  WorldCities: putRequestArray
};

console.log(JSON.stringify(dynamoDBFile, null, 2));
