import * as express from 'express'
import { Observable } from 'rxjs'
import { Client } from 'thruway.js'
import { config } from '../config'
import { Deal, MinsFromLastBlock } from './types'


const wamp = new Client(config.wamp.localUrl, config.wamp.realm)
const nReplay = 1

const deals$: Observable<Deal[]> =
  wamp.topic('com.fee.deals')
    .flatMap(y => y.args)

const dealsShare$ = deals$.shareReplay(nReplay)

const minsFromLastBlock$: Observable<MinsFromLastBlock> =
  wamp.topic('com.fee.minsfromlastblock')
    .flatMap(y => y.args)

const minsFromLastBlockShare$ = minsFromLastBlock$.shareReplay(nReplay)

const app = express()

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get(
  '/btc/deals',
  (_, res) => dealsShare$
    .take(nReplay)
    .subscribe(
    x => res.send(x),
    err => { console.error(`error in server: ${err}`) },
    // () => console.log('Successly sent price!')
  )
)

app.get(
  '/btc/minsfromlastblock',
  (_, res) => minsFromLastBlockShare$
    .take(nReplay)
    .subscribe(
    x => res.send(x),
    err => { console.error(`error in server: ${err}`) },
  )
)

app.listen(
  3000,
  () => console.log('Listening on port 3000!')
)
