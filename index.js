var express = require("express");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
//const fetch = require("node-fetch");
const { Blob } = require("buffer");
var app = express();

const ip = "127.0.0.1:3030";

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

app.get("/yoink", (request, response) => {
  fetch(`http://${ip}/yoink`)
    .then((response) => response.arrayBuffer())
    .then((buffer) => {
      const image = new Blob([buffer], { type: "image/png" });
      fs.writeFileSync("yoink.jpg", Buffer.from(buffer));
      console.log("Image saved as yoink.jpg");
      return "gaming";
    })
    .then((data) => {
      console.log(`Response: ${data}`);
    })
    .catch((error) => {
      console.error(`Fetch error: ${error}`);
    });

  const imagePath = path.join(__dirname, "yoink.jpg");

  response.send("yoink");
});

app.get("/demo", (request, response) => {
  exec("curl http://10.100.230.16:3030/status", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
  response.send("demo");
});

var server = app.listen(8080, function () {
  var host = "localhost";
  var port = server.address().port;
  console.log("Server listening at http://%s:%s", host, port);
});
