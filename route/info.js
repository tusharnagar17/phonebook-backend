const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  const currentDate = new Date();
  const options = {
    timeZone: "UTC", // Change this to your desired timezone, like 'America/New_York', 'Europe/London', etc.
    hour12: false, // Display time in 24-hour format
    weekday: "long", // Display full weekday name
    year: "numeric", // Display full year
    month: "long", // Display full month name
    day: "numeric", // Display day of the month
    hour: "numeric", // Display hour
    minute: "numeric", // Display minute
    second: "numeric", // Display second
  };

  const formattedDate = currentDate.toLocaleString("en-US", options);
  const info = `<p>Phonebook has info for 2 people</p> <br> <i>${formattedDate}</i>`;
  res.send(info);
});

module.exports = route;
