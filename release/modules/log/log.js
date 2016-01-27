"use strict";
require("babel-polyfill");
require("babel-register");
class Log {
    constructor() {
    }
    info(message) {
        console.log(message);
    }
    debug(message) {
        console.log(message);
    }
    warning(message) {
        console.log(message);
    }
    error(message) {
        console.log(message);
    }
}
exports.Log = Log;
;
