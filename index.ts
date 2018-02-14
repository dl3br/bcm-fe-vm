import { Monitor } from 'forever-monitor'

const options = {
  max: Number.POSITIVE_INFINITY,
  minUptime: 5000,
  spinSleepTime: 5000,
  silent: false,
}

new (Monitor)('src/rest-server.js', options)
  .on('exit', () => console.log('rest-server.js has exited after infinity restarts'))
  .start()

new (Monitor)('src/crossbar-relayer.js', options)
  .on('exit', () => console.log('crossbar-relayer.js has exited after infinity restarts'))
  .start()
