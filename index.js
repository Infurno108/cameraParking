var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/status", (request, response) => {
  const status = {
    Status: "running",
  };
  response.send(status);
});

var server = app.listen(3030, function () {
  var host = "localhost";
  var port = server.address().port;
  console.log("Server listening at http://%s:%s", host, port);
});
