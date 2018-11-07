const mongoose = require('mongoose')
let config = require('./config')

module.exports = (cb) => {
  var db = mongoose.connection

  db.on('connecting', function () {
    console.log('connecting to MongoDB...')
  })

  db.on('error', function (error) {
    console.error('Error in MongoDb connection: ')
    mongoose.disconnect()
    cb(error)
  })
  db.on('connected', function () {
    console.log('MongoDB connected!')
  })
  db.once('open', function () {
    console.log('MongoDB connection opened!')
    cb(null)
  })
  db.on('reconnected', function () {
    console.log('MongoDB reconnected!')
    cb(null)
  })
  db.on('disconnected', function () {
    console.log('MongoDB disconnected!')
    mongoose.connect(config.url, {server: {auto_reconnect: true}})
  })
  mongoose.connect(config.url, {server: {auto_reconnect: true}})
}
