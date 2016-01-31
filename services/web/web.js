"use strict";
var express = require("express");
var path = require("path");
var parser = require("body-parser");
const seneca = require("seneca")();
const configuration = require("../../config.json");
const httpServer = express();
httpServer.use(parser.json());
httpServer.use("/bower", express.static(path.join(__dirname, "../../frontend/bower")));
httpServer.use("/components", express.static(path.join(__dirname, "../../frontend/")));
httpServer.get("/", (request, response) => response.sendFile(path.join(__dirname, "../../frontend/index.html")));
httpServer.listen(9000, () => {
    seneca
        .client(configuration.service.port.task)
        .ready(console.log);
    seneca.act({ role: "log", cmd: "info", message: "TEST :D" });
});
console.log("test");
