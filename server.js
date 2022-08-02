const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Perfomance example");
});

app.get("/timer", (req, res) => {
  //delay the response
  res.send("Ding ding ding!");
});
