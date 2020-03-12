const Websocket = require('ws');

const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];
// the env vars will be like HTTP_PORT=3002 P2P_PORT=5002
// PEERS=ws://localhost:5001,ws://localhost:5002,... hence the split on the comma above

class P2pServer {
  constructor(blockchain) {
    this.blockchain = blockchain;
    this.sockets = [];
  }

  listen() {
    const server = new Websocket.Server({ port: P2P_PORT });
    server.on('connection', socket => this.connectSocket(socket));
    this.connectToPeers();
    console.log(`Listening for peer-to-peer connections on: ${P2P_PORT}`);
  }

  connectToPeers() {
    peers.forEach(peer => {
      const socket = new Websocket(peer);
      socket.on('open', () => this.connectSocket(socket));
    });
  }

  connectSocket(socket) {
    this.sockets.push(socket);
    console.log('Socket connected. Socket url is:', socket.url);
    this.messageHandler(socket);
    socket.send(JSON.stringify(this.blockchain.chain));
  }

  messageHandler(socket) {
    socket.on('message', message => {
      const data = JSON.parse(message);
      console.log('data', data);
      this.blockchain.replaceChain(data);
    });
  }
}

module.exports = P2pServer;
