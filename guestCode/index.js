var express = require("express");
const fs = require("fs");
const path = require("path");
var app = express();

app.get("/status", (request, response) => {
  const status = {
    Status: "running",
  };
  response.send(status);
});

app.get("/yoink", (request, response) => {
  const imagePath = path.join(__dirname, "yoink.jpg");
  const imageBuffer = fs.readFileSync(imagePath);
  response.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": imageBuffer.length,
  });
  response.end(imageBuffer, "binary");
});

var server = app.listen(3030, function () {
  var host = "localhost";
  var port = server.address().port;
  console.log("Server listening at http://%s:%s", host, port);
  
});
