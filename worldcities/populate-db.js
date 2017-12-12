var AWS = require("aws-sdk");
var fs = require("fs");
var csvParse = require("csv-parse/lib/sync");
var dbConfig = require("./db-config.js");

const CSV_DATA_PATH = "simplemaps-worldcities-basic.csv";

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing cities into DynamoDB. Please wait...");

var worldcities = csvParse(fs.readFileSync(CSV_DATA_PATH), {columns: true});
worldcities.forEach(function(city) {
  var params = {
    TableName: "WorldCities",
    Item: {
      "city":  city.city,
      "city_ascii": city.city_ascii,
      "lat":  city.lat,
      "lng":  city.lng,
      "pop": city.pop,
      "country":  city.country,
      "iso2":  city.iso2,
      "iso3":  city.iso3,
      "province":  city.province
    }
  };

  docClient.put(params, function(err, data) {
    if (err) {
      console.error("Unable to add city", city.city_ascii, ". Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("PutItem succeeded:", city.city_ascii);
    }
  });
});
