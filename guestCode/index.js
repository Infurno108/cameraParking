var express = require("express");
var app = express();

app.get("/status", (request, response) => {
  const status = {
    Status: "running",
  };
  response.send(status);
});

app.get("/yoink", (request, response) => {
  response.sendFile("guestCode/yoink.jpg", { root: __dirname });
});

var server = app.listen(3030, function () {
  var host = "localhost";
  var port = server.address().port;
  console.log("Server listening at http://%s:%s", host, port);
});
