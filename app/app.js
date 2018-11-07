var express = require('express')
var app = express()
var PORT = 5000

global.rootDirectory = __dirname
app.use(express.static(global.rootDirectory + '/public'))
require('./route')(app)

app.listen(PORT)
