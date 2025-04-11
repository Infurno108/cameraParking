var express = require("express");
var app = express();

app.get("/status", (request, response) => {
  const status = {
    Status: "running",
  };
  response.send(status);
});
