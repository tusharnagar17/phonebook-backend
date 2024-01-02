// Initialize
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

// Custom middleware
const requestLogger = (request, response, next) => {
  console.log("Method: ", request.method);
  console.log("Path: ", request.path);
  console.log("Body :", request.body);
  console.log("---------");

  next();
};

// PORT init
const PORT = process.env.PORT || 3001;

// Mogan init
const morganMiddle = morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "-",
    tokens["response-time"](req, res),
    "ms",
  ].join(" ");
});

// Middleware setup to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// use MORGAN Instead requestLogger
// app.use(requestLogger);
app.use(morganMiddle);
app.use(cors());

// routes
const apiPerson = require("./route/api/person");
const info = require("./route/info");

app.get("/", (req, res) => {
  res.send("Your app at index.js");
});

// different routes
app.use("/api/persons", apiPerson);
app.use("/info", info);

app.listen(PORT, () => {
  console.log(`App is listening at PORT: ${PORT}`);
});
