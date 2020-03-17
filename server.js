require("dotenv").config();
const express = require("express");
const { PORT } = require("./config");
const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use("/api", express.static(__dirname + "/src/api"));
app.use("/assets", express.static(__dirname + "/src/assets"));
app.use("/js", express.static(__dirname + "/src/js"));
app.use("/src", express.static(__dirname + "/src"));
app.use("/utils", express.static(__dirname + "/src/utils"));
app.use("/views", express.static(__dirname + "/src/views"));

app.get("/heartbeat", function(req, res) {
  res.json({
    is: "working"
  });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Methods", "GET");
  next();
});

const { locationRouter, weatherRouter } = require("./routes");
app.use("/location", locationRouter);
app.use("/weather", weatherRouter);

app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});
