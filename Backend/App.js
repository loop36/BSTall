var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var cors = require('cors')
app.use(cors());
var pgp = require("pg-promise")(/* options */);

let ssl = { rejectUnauthorized: false };
const ConString =
  "postgres://mogwwtlidlxvsc:096686827b0940704204ce05f13ae15beddac0daff144a7506d792892e98e872@ec2-54-163-97-228.compute-1.amazonaws.com:5432/da5u0blil0urgl?ssl=true";

const config = {
  user: "mogwwtlidlxvsc",
  host: "ec2-54-163-97-228.compute-1.amazonaws.com",
  database: "da5u0blil0urgl",
  password: "096686827b0940704204ce05f13ae15beddac0daff144a7506d792892e98e872",
  port: 5432,
  max: 30, // use up to 30 connections
  ssl: ssl,
};

const db = pgp(config);


app.get("/", function (req, res) {
res.send("wordked")
  });


app.get("/getBooks", function (req, res) {
  db.query('SELECT * FROM public."productDetails"')
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (error) {
      res.status(200).json(error);
    });
});

app.get("/getBook/:id", function (req, res) {
    db.query('SELECT $ FROM public."productDetails"',req.params.id)
    .then(function (data) {
      res.status(200).json(data);
    })
    .catch(function (error) {
      res.status(200).json(error);
    });
});

app.get("/orderBooks", function (req, res) {
  res.send("orderBookWorked");
});

app.listen(3001);
