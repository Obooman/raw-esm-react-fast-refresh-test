const express = require("express");
const expressStatic = require("express-static");
const fs = require("fs");
const path = require("path");
const shortid = require("shortid");
const app = express();

let id;
let content;

app.get("/update/changes", (req, res) => {
  id = shortid.generate();
  res.send({
    url: `/update/${id}`,
  });
  res.end();
});

app.get("/update/:id", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.send(fs.readFileSync(path.resolve(__dirname, "./public/one.js")));
  res.end();
});

app.use(expressStatic("./public"));

app.listen(9010);
