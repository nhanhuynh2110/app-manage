let reconnectFun = require('../reconnect')

module.exports = (socket) => {
  socket.on('verify', (isVerify) => {
    if (isVerify) {
      socket.emit('insert', { token: socket.query.token, name: 'pn' })
    }
  })

  socket.on('connect-server', (token) => {
    console.log('connect success')
    reconnectFun.reconnectWithToken(socket, token)
  })
  socket.on('error', (err, data) => {
    console.log('err', err)
    if (err === 'Auth-fail') {
      reconnectFun.reconnectLogin(socket)
    } else {
      reconnectFun.reconnect(socket)
    }
  })
  socket.on('disconnect', function () {
    console.log('Disconnected')
  })
}
