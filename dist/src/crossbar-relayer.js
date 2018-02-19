"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const thruway_js_1 = require("thruway.js");
const config_1 = require("../config");
const topics = config_1.config.wamp.topics;
const wampRemote = new thruway_js_1.Client(config_1.config.wamp.remoteUrl, config_1.config.wamp.realm);
const wampLocal = new thruway_js_1.Client(config_1.config.wamp.localUrl, config_1.config.wamp.realm);
topics.map(topic => wampRemote.topic(topic)
    .flatMap(y => y.args)
    .forEach(val$ => wampLocal.publish(topic, val$)));
//# sourceMappingURL=crossbar-relayer.js.map