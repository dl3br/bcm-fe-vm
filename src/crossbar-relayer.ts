import { Client } from 'thruway.js'
import { config } from '../config'

const topics = config.wamp.topics
const wampRemote = new Client(config.wamp.remoteUrl, config.wamp.realm)
const wampLocal = new Client(config.wamp.localUrl, config.wamp.realm)

topics.map(topic => wampRemote.topic(topic)
    .flatMap(y => y.args)
    .forEach(val$ => wampLocal.publish(topic, val$)))

wampLocal.topic('keep_socket_alive_hack').subscribe()
