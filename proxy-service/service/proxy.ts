"use strict";

import "babel-polyfill";
import "babel-register";

import * as express from "express";
const app = express();

const seneca: any = require("seneca")();
const client: any = seneca.client({
    type: "tcp",
    host: "localhost",
    port: "10001"
});

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello World! ");
});

app.listen(3000, () => {
    client.act({ role: "logging", cmd: "info", message: "Example application running in port 3000" });
});
