var socketClient = require('socket.io-client')

class SocketModule {
  constructor (config) {
    this.config = config
    // config.domain
    this.socketSevice = null
    this.socketCurrent = null
  }

  getSocket () {
    return socketClient(this.config.url, { query: this.config.query })
  }

  getCurrentSocket () {
    return this.socketCurrent
  }
}

module.exports = SocketModule
