var AWS = require("aws-sdk");
var dbConfig = require("./db-config.js");

var dynamoDB = new AWS.DynamoDB();

var params = {
  TableName : "WorldCities",
  KeySchema: [
    { AttributeName: "city_ascii", KeyType: "HASH"},  //Partition key
    { AttributeName: "country", KeyType: "RANGE" }  //Sort key
  ],
  AttributeDefinitions: [
    { AttributeName: "city_ascii", AttributeType: "S" },
    { AttributeName: "country", AttributeType: "S" }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamoDB.createTable(params, function(err, data) {
  if (err) {
      console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
  } else {
      console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
  }
});
