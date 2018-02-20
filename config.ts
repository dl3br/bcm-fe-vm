export const config = {
    wamp: {
        localUrl: 'ws://localhost:8080/ws',
        remoteUrl: 'ws://159.100.247.219:8080/ws',
        realm: 'realm1',
        topics: ['com.fee.v1.btc.deals', 'com.fee.v1.btc.minsfromlastblock'],
    }
}
