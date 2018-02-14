import { Observable } from 'rxjs'
import { Client } from 'thruway.js'
import { config } from '../config'
import { Deal, MinsFromLastBlock } from './types'

const topic = 'com.fee.deals'
const wampRemote = new Client(config.wamp.remoteUrl, config.wamp.realm)
const wampLocal = new Client(config.wamp.localUrl, config.wamp.realm)

const deals$: Observable<Deal[]> =
  wampRemote.topic(topic)
    .flatMap(y => y.args)

wampLocal.publish(topic, deals$)

