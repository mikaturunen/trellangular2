"use strict";
require("babel-polyfill");
require("babel-register");
var express = require("express");
var log_1 = require("../../modules/log/log");
const log = new log_1.Log();
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(3000, () => {
    log.info("Example app listening on port 3000!");
});
