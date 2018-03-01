export const config = {
    wamp: {
        localUrl: 'ws://localhost:8080/ws',
        remoteUrl: 'ANSIBLE_ME',
        realm: 'realm1',
        user: "relayer",
        key: 'ANSIBLE_ME',
        topics: ['com.fee.v1.btc.deals', 'com.fee.v1.btc.minsfromlastblock'],
    }
}
