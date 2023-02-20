const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=14b596db390b68c40e74dbbb55bb25d0&units=metric";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      console.log(temp);
      const description = weatherData.weather[0].description;
      console.log(description);
      const icon = weatherData.weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write(
        "<h1>The temperature in London is: " + temp + " degrees Celcius</h1>"
      );
      res.write("<h3>The weather is is currently: " + description + "</h3>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
