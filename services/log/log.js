"use strict";
const seneca = require("seneca")();
const configuration = require("../../config.json");
seneca
    .use("../../lib/log")
    .listen(configuration.service.port.task)
    .ready(() => {
    console.log("Logger ready");
});
