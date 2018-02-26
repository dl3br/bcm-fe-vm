import { Client } from 'thruway.js'
import { config } from '../config'

const topics = config.wamp.topics
const wampRemote = new Client(config.wamp.remoteUrl, config.wamp.realm)
const wampLocal = new Client(config.wamp.localUrl, config.wamp.realm)

const data = topics.map(topic => wampRemote.topic(topic)
    .map(y => ({ val: y.args, topic })))

data.map(x => x.subscribe(
    ({val, topic}) => wampLocal.publish(topic, val)
))
