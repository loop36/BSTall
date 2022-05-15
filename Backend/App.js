var express = require("express");
const dynamo =  require('./dynamoCRUD')
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var cors = require('cors')
app.use(cors());
app.use(express.json({ extended: false }));


app.use("/payment", require("./payment"));
app.get("/", function (req, res) {
res.send("worked")
  });

app.get("/orderBooks", function (req, res) {
  res.send("orderBookWorked");
});

app.get("/orderdetails",function(req,res){
  dynamo.getAllOrders(req,res); 
});

app.get("/orderdetails/:oid",(req,res)=>{
  dynamo.getOrder(req.params.oid,res);
 })
;
app.post("/eps",(req,res)=>{
 dynamo.getOrdersByEpid(req.body.email,req.body.phone,req,res);
 })
app.listen(3001);
