var AWS = require("aws-sdk");
var dbConfig = require("./db-config.js");

var dynamoDB = new AWS.DynamoDB();

var params = {
    TableName : "WorldCities"
};

dynamoDB.deleteTable(params, function(err, data) {
  if (err) {
    console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
  } else {
    console.log("Deleted table. Table description JSON:", JSON.stringify(data, null, 2));
  }
});
