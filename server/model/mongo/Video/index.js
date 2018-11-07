var mongoose = require('mongoose')
let Schema = require('./Schema')
require('./instance')(Schema)

module.exports = mongoose.model('Video', Schema)
