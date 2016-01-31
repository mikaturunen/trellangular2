"use strict";
module.exports = function (options) {
    "use strict";
    const seneca = this;
    const plugin = "log";
    [{
            cmd: "error",
            callback: (args, done) => {
                console.log("log:", args.message);
                done(null, { status: "OK" });
            }
        },
        {
            cmd: "info",
            callback: (args, done) => {
                console.log("log:", args.message);
                done(null, { status: "OK" });
            }
        }]
        .forEach(s => seneca.add({ role: plugin, cmd: s.cmd }, s.callback));
    return { name: plugin };
};
