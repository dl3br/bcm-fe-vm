export const config = {
    wamp: {
        localUrl: 'ws://localhost/ws',
        remoteUrl: 'ws://159.100.240.25:8080/ws',
        realm: 'realm1',
        topics: ['com.fee.v1.btc.deals', 'com.fee.v1.btc.minsfromlastblock'],
    }
}
