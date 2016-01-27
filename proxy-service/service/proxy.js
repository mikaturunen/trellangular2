"use strict";
require("babel-polyfill");
require("babel-register");
var express = require("express");
const app = express();
const seneca = require("seneca")();
const client = seneca.client({
    type: "tcp",
    host: "localhost",
    port: "10001"
});
app.get("/", (req, res) => {
    res.send("Hello World! ");
});
app.listen(3000, () => {
    client.act({ role: "logging", cmd: "info", message: "Example application running in port 3000" });
});
