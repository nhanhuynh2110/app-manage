let sha256 = require('sha256')
let config = require('./config')

let reconnectLogin = (socket) => {
  let { secretKey, secretCompany } = config.urls.serverManagerService
  socket.io.opts.query = { type: 'login', secretKey: secretKey, signature: sha256(secretKey + secretCompany) }
  reconnect(socket)
}

let reconnectWithToken = (socket, token) => {
  socket.io.uri = config.url + '?token=' + token + '&type=verify'
  socket.io.opts.query = socket.query = { type: 'verify', token: token }
  reconnect(socket)
}

let reconnect = (socket) => {
  socket.io.readyState = 'closed'
  socket.io.reconnect()
}

module.exports = { reconnectLogin, reconnectWithToken, reconnect }
