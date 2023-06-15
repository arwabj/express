// 1 require express
const express = require("express");
// 5 require fs
const fs = require("fs");
//7
const v = require("./verif");

// 2 instance of express
const app = express();

//3 PORT
const PORT = 6300;
// 6 roots
app.get("/", v, (req, res) => {
  fs.readFile("/HomePage.html", "utf8", (err, data) => {
    err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
  });
});

app.get("/HomePage.html", v, (req, res) => {
  fs.readFile("./HomePage.html", "utf8", (err, data) => {
    err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
  });
});

app.get("/OurServices.html", v, (req, res) => {
  fs.readFile("./OurServices.html", "utf8", (err, data) => {
    err ? res.end("FILE NOT FOUND") && console.error(err) : res.end(data);
  });
});

app.get("./ContactUs.htm", v, (req, res) => {
  fs.readFile("./ContactUs.htm", "utf8", (err, data) => {
    err ? res.end("FIND NOT FOUND") && console.error(err) : res.end(data);
  });
});

// 4 create server
app.listen(PORT, (req, res) => {
  console.log(`Server is ranning on port ${PORT}...`);
});
