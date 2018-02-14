import { Observable } from 'rxjs'
import { Client } from 'thruway.js'
import { config } from '../config'
// import { Deal, MinsFromLastBlock } from './types'

const topics = config.wamp.topic
const wampRemote = new Client(config.wamp.remoteUrl, config.wamp.realm)
const wampLocal = new Client(config.wamp.localUrl, config.wamp.realm)

topics.map(topic =>
    wampRemote.topic(topic)
        .flatMap(y => y.args)
        .map(val => wampLocal.publish(topic, val)))
