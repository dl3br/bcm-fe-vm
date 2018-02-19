"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forever_monitor_1 = require("forever-monitor");
const options = {
    max: Number.POSITIVE_INFINITY,
    minUptime: 5000,
    spinSleepTime: 5000,
    silent: false,
};
new (forever_monitor_1.Monitor)('src/rest-server.js', options)
    .on('exit', () => console.log('rest-server.js has exited after infinity restarts'))
    .start();
new (forever_monitor_1.Monitor)('src/crossbar-relayer.js', options)
    .on('exit', () => console.log('crossbar-relayer.js has exited after infinity restarts'))
    .start();
//# sourceMappingURL=index.js.map