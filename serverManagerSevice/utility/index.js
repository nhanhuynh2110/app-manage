let sha256 = require('sha256')
let config = require('../config')
let generateCode = function () {
  return sha256(config.secretKey + Date.now().toString())
}

module.exports = {
  generateCode
}
