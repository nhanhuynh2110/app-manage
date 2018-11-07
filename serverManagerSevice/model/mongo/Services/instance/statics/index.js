let sha256 = require('sha256')
let checkSecretKeyDomainAndExpired = function (secertKey, domain, cb) {
  return this.findOne({ 'listAppRegister.secretKey': secertKey, 'listAppRegister.domain': domain, 'listAppRegister.expired': {$lte: new Date()} }, cb)
}
let verify = function (token, cb) {
  return this.findOne({ 'listAppRegister.token': token, 'listAppRegister.expired': {$lte: new Date()} }, cb)
}
let updateTokenApp = function (item, secretKey, domain, cb) {
  var listAppRegister = item.listAppRegister
  let i = listAppRegister.findIndex((el) => el.secretKey === secretKey && el.domain === domain)
  if (i > -1) listAppRegister[i].token = sha256(new Date().toString())
  item.listAppRegister = listAppRegister
  this.update({ listAppRegister: listAppRegister }, cb)
}

let login = function (query, cb) {
  let {secretKey, domain, signature} = query
  if (!secretKey || !domain || !signature) return cb(new Error('login-fail'))
  this.checkSecretKeyDomainAndExpired(secretKey, domain, (err, res) => {
    if (err) return cb(err)
    if (!res) cb(new Error('login-fail'))
    let data = sha256(secretKey + domain + res.secretCompany)
    if (data !== signature) return cb(new Error('login-fail'))
    this.updateTokenApp(res, secretKey, domain, cb)
  })
}

module.exports = {
  verify,
  checkSecretKeyDomainAndExpired,
  updateTokenApp,
  login
}
