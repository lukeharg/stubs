var AWS = require("aws-sdk");
var dbConfig = require("./db-config.js");

var docClient = new AWS.DynamoDB.DocumentClient()

var table = "WorldCities";
var city_ascii = "London";

var queryparams = {
  TableName: table,
  ExpressionAttributeValues: {
   ":v1": city_ascii
  },
  KeyConditionExpression: "city_ascii = :v1"
 };

 docClient.query(queryparams, function(err, data) {
   if (err) {
     console.error("Unable to read items. Error JSON:", JSON.stringify(err, null, 2));
   } else {
     console.log("Query succeeded:", JSON.stringify(data, null, 2));
   }
});
