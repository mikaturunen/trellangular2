"use strict";

import * as express     from "express";
import * as path        from "path";
import * as Q           from "q";
import * as parser      from "body-parse";
import staticServe      from "serve-static";

const seneca: any = require("seneca")();
const configuration: any = require("../../config.json");
const httpServer = express();

const deferred = Q.defer<boolean>();

seneca
    .use("../../lib/log")
    .client(configuration.service.port.task)
    .ready(() => deferred.resolve(true));

deferred.promise
    .done(() => {
        httpServer.use(parser.json());
        httpServer.use(staticServe("/bower", path.join(__dirname, "../../frontend/bower")));
        httpServer.use(staticServe("/components", path.join(__dirname, "../../frontend/")));

        httpServer.get("/", (request: express.Request, response: express.Response) =>
            response.sendFile(path.join(__dirname, "../../frontend/index.html"))
        );
        seneca.act({ role: "log", cmd: "info", message: "" });
    });
