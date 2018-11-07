var express = require('express')
let sha1 = require('sha1')
var app = express()
var port = 3200
var model = require('./model/mongo')
let ModuleSocket = require('./socket/module')

var socketClient = require('socket.io-client')

require('./model/mongo/connect')((err) => {
  if (err) console.log(err)
  else {
    // model.Blog.updateOne({}, { color: 'bacon' }, { runValidators: true }, function (err) {
    //   console.log(err)
    // })
    // var toy = new model.Blog({ title: 'nhan', color: 'red', name: 'red', oo: 'oo' })
    // var error = toy.validateSync()
    // console.log(error)
    // var newBlog = new model.Blog({ title: 'Sáng 6/10, liên quan hành.' })
    // newBlog.save()
    // newBlog.insertBlog((err, result) => {
    //   console.log(err, result)
    // })
    // var newAccount = new model.Account({
    //   code: '123123',
    //   username: 'KageTris',
    //   email: 'phumanong@gmail.com',
    //   password: '123123'
    // })
    // newAccount.save()
    // })
  }
})

let config = require('./socket/config')

// const socketManagerSevice = socketClient(config.url, { query: {token: '', type: 'verify'} })
let myModule = new ModuleSocket({ url: config.urls.serverManagerService.url, query: {token: '', type: 'verify'} })
let socketManagerSevice = myModule.getSocket()
socketManagerSevice.on('connect', (err) => {
  if (err) return console.log(err)
})

require('./socket/event')(socketManagerSevice)

app.listen(port)
