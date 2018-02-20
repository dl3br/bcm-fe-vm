export const config = {
    wamp: {
        localUrl: 'ws://localhost:8080/ws',
        remoteUrl: 'ws://185.19.28.13:8080/ws',
        realm: 'realm1',
        topics: ['com.fee.v1.btc.deals', 'com.fee.v1.btc.minsfromlastblock'],
    }
}
