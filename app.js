const express = require("express");
const https = require("https");

const app = express();

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=14b596db390b68c40e74dbbb55bb25d0&units=metric";

https.get(url, function(response){
    console.log(response);
});

app.get("/", function (req, res) {
  res.send("Server is up and running.");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
