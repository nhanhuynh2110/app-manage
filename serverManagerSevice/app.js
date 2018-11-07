var express = require('express')
var app = express()
var PORT = 3000
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
let utility = require('./utility')

var MODEL = require('./model/mongo')
require('./model/mongo/connect')((err) => {
  if (err) console.log(err)
  else {
    // let services = new MODEL.Services({
    //   code: utility.generateCode(),
    //   secretCompany: 'TITAN',
    //   company: 'titan',
    //   spokesman: 'phu ma nong',
    //   phone: '0999999999',
    //   listAppRegister: [{
    //     secretKey: 'TA',
    //     ip: '-1',
    //     domain: 'wland.vn',
    //     expired: new Date(),
    //     registerDate: new Date()
    //   }],
    //   lastModify: new Date()
    // })
    // services.save((err, result) => {
    //   if (err) return console.log(err, 'save services false')
    //   return console.log(result)
    // })
  }
})

require('./socket')(io)

server.listen(PORT, (err) => {
  if (err) return console.log('Server Error')
  return console.log('Server services Start Success 3000')
})
