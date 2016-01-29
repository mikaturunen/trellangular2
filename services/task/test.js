"use strict";
const seneca = require("seneca")();
const configuration = require("../../config.json");
seneca
    .use("../../lib/log")
    .client(configuration.service.port.task)
    .ready(() => {
    seneca.act({ role: "log", cmd: "info", message: "PÖÖ" }, console.log);
});
