"use strict";

// Have to use 'function' syntax instead of fat arrow to make sure the this behavior is retained
// due to the way seneca is wired.

module.exports = function(options: any) {
    "use strict";

    const seneca = this;
    const plugin = "log";

    [{
        cmd: "error",
        callback: (args: any, done: (error: Error, object: Object) => void) => {
            console.log(args.message);
            done(null, { status: "OK" });
        }
    },
    {
        cmd: "info",
        callback: (args: any, done: (error: Error, object: Object) => void) => {
            console.log(args.message);
            done(null, { status: "OK" });
        }
    }]
    .forEach(s => seneca.add({ role: plugin, cmd: s.cmd }, s.callback));

    return { name: plugin };
};
