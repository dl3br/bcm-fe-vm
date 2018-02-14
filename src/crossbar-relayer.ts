import { Observable } from 'rxjs'
import { Client } from 'thruway.js'
import { config } from '../config'
import { Deal, MinsFromLastBlock } from './types'

const topic = 'com.fee.deals'
const topics = config.wamp.topics
const wampRemote = new Client(config.wamp.remoteUrl, config.wamp.realm)
const wampLocal = new Client(config.wamp.localUrl, config.wamp.realm)

topics.map(topic =>
    wampRemote.topic(topic)
        .map(y => y.args)
        .do(val => wampLocal.publish(topic, val)))

