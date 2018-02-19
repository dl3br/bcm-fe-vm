"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const thruway_js_1 = require("thruway.js");
const config_1 = require("../config");
const wamp = new thruway_js_1.Client(config_1.config.wamp.localUrl, config_1.config.wamp.realm);
const nReplay = 1;
const deals$ = wamp.topic('com.fee.deals')
    .flatMap(y => y.args);
const dealsShare$ = deals$.shareReplay(nReplay);
const minsFromLastBlock$ = wamp.topic('com.fee.minsfromlastblock')
    .flatMap(y => y.args);
const minsFromLastBlockShare$ = minsFromLastBlock$.shareReplay(nReplay);
const app = express();
app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/btc/deals', (_, res) => dealsShare$
    .take(nReplay)
    .subscribe(x => res.send(x), err => { console.error(`error in server: ${err}`); }));
app.get('/btc/minsfromlastblock', (_, res) => minsFromLastBlockShare$
    .take(nReplay)
    .subscribe(x => res.send(x), err => { console.error(`error in server: ${err}`); }));
app.listen(3000, () => console.log('Listening on port 3000!'));
//# sourceMappingURL=rest-server.js.map