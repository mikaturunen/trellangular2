"use strict";

import "babel-polyfill";
import "babel-register";

export class Log {
    constructor() {
        // TODO Create logger instance on specific log output, currently just dishing to console.log
    }

    public info(message: string) {
        console.log(message);
    }

    public debug(message: string) {
        console.log(message);
    }

    public warning(message: string) {
        console.log(message);
    }

    public error(message: string) {
        console.log(message);
    }
};
