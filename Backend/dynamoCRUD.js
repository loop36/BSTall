// Dynamo db
const AWS = require("aws-sdk");
const md5 = require("md5");

AWS.config.update({
  region: "us-east-1", // replace with your region in AWS account
});

const DynamoDB = new AWS.DynamoDB();
const generateEPSearchid =  (email,Phone) => {
  return md5(email + Phone);
}

//Get an Order Details
const getAnOrder = async (orderId, res) => {

  var params = {
    TableName: "BookDetailsTable",
    Key: {
      bookid: { S: orderId },
    },
    // ProjectionExpression: "",
    // ExpressionAttributeNames : {'#s': 'status'},
    ConsistentRead:true
  };
  
  return await DynamoDB.getItem(params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
      res.json(JSON.stringify({ status: "Not Found" }));
    } // an error occurred
    else {
      if(data.Item==null){
        console.log("Not Found");
      }
      res.send(JSON.stringify(data));
    } // successful response
  });
};


//get all orders
const getAllOrders = (req, res) => {
  const params = {
    TableName: "BookDetailsTable",
  };
  DynamoDB.scan(params, function (err, data) {
    if (err) {
      console.error("Unable to find Orders", err);
    } else {
      console.log(`Found ${data.Count} Orders`);
      res.send(JSON.stringify(data));
    }
  });
};
const getOrdersByEpid = (email,phone,req, res) => {
  const epid=generateEPSearchid(email,phone)
  const params = {
    // Specify which items in the results are returned.
    FilterExpression: "EPSearch = :eid ",
    // Define the expression attribute value, which are substitutes for the values you want to compare.
    ExpressionAttributeValues: {
      ":eid": {S:epid},
   
    },
    // Set the projection expression, which are the attributes that you want.
    ProjectionExpression: "orderID",
    TableName: "BookDetailsTable",
   ConsistentRead:true
  };
  DynamoDB.scan(params, function (err, data) {
    if (err) {
      console.error("Unable to find order", err);
    } else {
      console.log(`Found ${data.Count} Orders`);
      res.send(JSON.stringify(data));
    }
  });
};

//Add an order
const addOrders = async (orderdetails) => {
  const EPSearch=generateEPSearchid(orderdetails.addr.Email.value,orderdetails.addr.Phone.value);
  const params = {
    TableName: "BookDetailsTable",
    Item: {
      bookid: { S: orderdetails.orderCreationId },
      orderID: { S: orderdetails.orderCreationId },
      status: { S: "Created" },
      address: {
        M: {
          firstname: { S: orderdetails.addr.FirstName.value },
          lastName: { S: orderdetails.addr.LastName.value },
          AddressLine1: { S: orderdetails.addr.AddressLine1.value },
          City: { S: orderdetails.addr.City.value },
          Pin: { S: orderdetails.addr.Pin.value },
          State: { S: orderdetails.addr.State.value },
          Phone: { S: orderdetails.addr.Phone.value },
          Email: { S: orderdetails.addr.Email.value },
          AddressLine2: { S: orderdetails.addr.AddressLine2.value },
        },
      },
      EPSearch:{S:EPSearch},
    },
  };

 await DynamoDB.putItem(params).promise();
};

//exports
exports.getOrder = getAnOrder;
exports.addOrders = addOrders;
exports.getAllOrders = getAllOrders;
exports.getOrdersByEpid = getOrdersByEpid;