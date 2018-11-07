let auth = require('./auth')
let model = require('../model/mongo')
module.exports = (io) => {
  io.use(auth.authAndLoginServices).on('connection', (socket) => {
    if (socket.handshake.query.type === 'login') {
      let { secretKey } = socket.handshake.query
      model.Services.checkSecretKeyDomainAndExpired(secretKey, (err, res) => {
        let appResgister = res.listAppRegister.find((el) => el.secretKey === secretKey)
        if (!err) socket.emit('connect-server', appResgister.token)
      })
    } else if (socket.handshake.query.type === 'verify') socket.emit('verify', true)
    socket.on('insert', (data) => {
      console.log('insert', data)
    })
  })
}
