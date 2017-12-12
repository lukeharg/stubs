var AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-southeast-2",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient()

var table = "WorldCitiesBasic";

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
