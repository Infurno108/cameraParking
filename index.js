var express = require("express");
const { exec } = require("child_process");
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
  exec("curl -O http://" + ip + "/yoink.png", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
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
