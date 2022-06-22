require("dotenv").config();
const dynamo = require("./dynamoCRUD");
const express = require("express");
const Razorpay = require("razorpay");
var path = require("path");
var bodyParser = require("body-parser");
const router = express.Router();
const crypto = require("crypto");

router.get("/orders",(req,res)=>{
res.status(200).send("hello");
})
router.post("/orders", async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: 12500, // amount in smallest currency unit
      currency: "INR",
      receipt: "receipt_order_74394",
    };
    console.log(req.body);
    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.post("/success", async (req, res) => {
  try {
    // getting the details back from our font-end
    console.log(req.body);
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      addr,
    } = req.body;

    // Creating our own digest
    // The format should be like this:
    // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
    const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);

    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

    const digest = shasum.digest("hex");

    // comaparing our digest with the actual signature
    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: "Transaction not legit!" });

    // THE PAYMENT IS LEGIT & VERIFIED
    // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT
    dynamo.addOrders(req.body).then((data) => {
      res.json({
        msg: "success",
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
      });
    });
  } catch (error) {
    console.log("we got issue " + error);
    res.status(500).send(error);
  }
});
module.exports = router;
