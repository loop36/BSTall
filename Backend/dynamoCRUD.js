// Dynamo db
const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1", // replace with your region in AWS account
});

const DynamoDB = new AWS.DynamoDB(); 
//  function getAllOrders() {
//     const params = {
//       TableName: "Movies",
//     };
  
//     DynamoDB.scan(params, function(err, data) {
//       if (err) {
//         console.error("Unable to find movies", err);
//       } else {
//         console.log(`Found ${data.Count} movies`);
//         console.log(data.Items);
//       }
//     });
//   }

 const addOrders=(orderdetails)=> {
    const params = {
      TableName: "BookDetailsTable",
      Item: {
          
        bookid:{S: orderdetails.orderCreationId},
        orderID:{S: orderdetails.orderCreationId},
        status:{S:"Created"},
        address:{M:{ 
          firstname:{S:orderdetails.addr.FirstName.value},
          lastName:{S:orderdetails.addr.LastName.value},
          AddressLine1:{S:orderdetails.addr.AddressLine1.value},
          City:{S:orderdetails.addr.City.value},
          Pin:{S:orderdetails.addr.Pin.value},
          State:{S:orderdetails.addr.State.value},
          Phone:{S:orderdetails.addr.Phone.value},
          Email:{S:orderdetails.addr.Email.value},
          AddressLine2:{S:orderdetails.addr.AddressLine2.value}}

        }
      },
    };
  
    DynamoDB.putItem(params, function(err) {
      if (err) {
        console.error("Unable to add movie", err);
      } else {
        console.log("Added Order");
      }
    });
  }
  exports.addOrders = addOrders;