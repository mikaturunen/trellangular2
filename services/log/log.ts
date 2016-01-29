"use strict";

const seneca: any = require("seneca")();
const configuration: any = require("../../config.json");

seneca
    .use("../../lib/log")
    .listen(configuration.service.port.task)
    .ready(() => {
        console.log("Logger ready");
    });
