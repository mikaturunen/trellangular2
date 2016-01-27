"use strict";

import "babel-polyfill";
import "babel-register";

import * as express from "express";
import { Log } from "../../modules/log/log";

const log = new Log();
const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    log.info("Example app listening on port 3000!");
});
