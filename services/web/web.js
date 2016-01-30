"use strict";
var express = require("express");
var path = require("path");
var Q = require("q");
var parser = require("body-parse");
var serve_static_1 = require("serve-static");
const seneca = require("seneca")();
const configuration = require("../../config.json");
const httpServer = express();
const deferred = Q.defer();
seneca
    .use("../../lib/log")
    .client(configuration.service.port.task)
    .ready(() => deferred.resolve(true));
deferred.promise
    .done(() => {
    httpServer.use(parser.json());
    httpServer.use(serve_static_1.default("/bower", path.join(__dirname, "../../frontend/bower")));
    httpServer.use(serve_static_1.default("/components", path.join(__dirname, "../../frontend/")));
    httpServer.get("/", (request, response) => response.sendFile(path.join(__dirname, "../../frontend/index.html")));
    seneca.act({ role: "log", cmd: "info", message: "" });
});
