require("dotenv").config();
const express = require("express");
const { APIKEY, PORT } = require("./config");
const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use("/src", express.static(__dirname + "/src"));
app.use("/views", express.static(__dirname + "/src/views"));

app.get("/heartbeat", function(req, res) {
  res.json({
    is: "working"
  });
});

app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});
