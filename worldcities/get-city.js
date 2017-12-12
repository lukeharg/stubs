var AWS = require("aws-sdk");
var dbConfig = require("./db-config.js");

var docClient = new AWS.DynamoDB.DocumentClient()

var table = "WorldCities";
var city_ascii = "Sydney";
var country = "Australia";

var params = {
  TableName: table,
  Key: {
    "city_ascii": city_ascii,
    "country": country
  }
};

docClient.get(params, function(err, data) {
  if (err) {
    console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
  } else {
    console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
  }
});
