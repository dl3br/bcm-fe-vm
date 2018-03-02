import { Client } from 'thruway.js'
import { config } from '../config'
import { auth_cra } from 'autobahn'

const topics = config.wamp.topics
const wampRemote = new Client(config.wamp.remoteUrl, config.wamp.realm)
const wampLocal = new Client(
    config.wamp.localUrlPrivate,
    config.wamp.realm,
    {
        authmethods: ['wampcra'],
        role: config.wamp.user,
        authid: config.wamp.user,
    }
)

wampLocal.onChallenge(challenge => challenge
    .map((x) => auth_cra.sign(config.wamp.key, x.extra.challenge)))

topics.map(topic => wampRemote.topic(topic)
    .flatMap(y => y.args)
    .forEach(val$ => wampLocal.publish(topic, val$, { exclude_me: false, })))

wampLocal.topic('keep_socket_alive_hack').subscribe()
