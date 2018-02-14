import { Observable } from 'rxjs'
import { Client } from 'thruway.js'
// import { config } from '../config'
import { Deal, MinsFromLastBlock } from './types'

const config = {
  wamp: {
    localUrl: 'ws://localhost:8080/ws',
    remoteUrl: 'ws://159.100.247.219:8080/ws',
    realm: 'realm1',
  },
}
const topic = 'com.fee.deals'
const wampRemote = new Client(config.wamp.remoteUrl, config.wamp.realm)
const wampLocal = new Client(config.wamp.localUrl, config.wamp.realm)

const deals$: Observable<Deal[]> =
  wampRemote.topic(topic)
    .flatMap(y => y.args)

wampLocal.publish(topic, deals$)
