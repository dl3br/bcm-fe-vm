export const config = {
    wamp: {
        localUrl: 'ws://localhost:8080/ws',
        remoteUrl: 'ws://159.100.240.25:8080/ws',
        realm: 'realm1',
        user: "relayer",
        key: 'ANSIBLE_ME',
        topics: ['com.fee.v1.btc.deals', 'com.fee.v1.btc.minsfromlastblock'],
    }
}
