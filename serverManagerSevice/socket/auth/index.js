let model = require('../../model/mongo')

let authAndLoginServices = (socket, next) => {
  console.log('socket', socket.handshake.query.type)
  switch (socket.handshake.query.type) {
    case 'verify':
      return model.Services.verify(socket.handshake.query.token, (err, result) => {
        if (!err && result) return next()
        else return next(new Error('Auth-fail'))
      })
    case 'login':
      console.log('socket.handshake', socket.request)
      return false
      return model.Services.login(socket.handshake.query, (err, res) => {
        if (err) return next(new Error('login-fail'))
        else return next()
      })
    default:
      break
  }
}

module.exports.authAndLoginServices = authAndLoginServices
