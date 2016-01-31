"use strict";

import * as express     from "express";
import * as path        from "path";
import * as parser      from "body-parser";
// import * as staticServe      from "serve-static";

const seneca: any = require("seneca")();
const configuration: any = require("../../config.json");
const httpServer = express();

httpServer.use(parser.json());
httpServer.use("/bower", express.static(path.join(__dirname, "../../frontend/bower")));
httpServer.use("/components", express.static(path.join(__dirname, "../../frontend/")));

httpServer.get("/", (request: express.Request, response: express.Response) =>
    response.sendFile(path.join(__dirname, "../../frontend/index.html"))
);

httpServer.listen(9000, () => {
    seneca
        .client(configuration.service.port.task)
        .ready(console.log);

    seneca.act({ role: "log", cmd: "info", message: "TEST :D" })
});
console.log("test");
