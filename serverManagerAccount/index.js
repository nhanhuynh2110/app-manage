var express = require('express')
var app = express()
const PORT = 3100
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)

require('./socket')(io)

server.listen(PORT, (err) => {
  if (err) return console.log('Server Error')
  return console.log('Server Account Start Success 3100')
})
