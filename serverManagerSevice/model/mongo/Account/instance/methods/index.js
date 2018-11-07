let findDocAccount = function (cb) {
  return this.model('Account').find({}, cb)
}

let insertDocAccount = function (cb) {
  return this.save(cb)
}

let updateDocAccount = function (code, condition, cb) {
  return this.update(code, {$set: condition}, (err, result) => {
    if (err) return cb(err)
    else return cb(null, result)
  })
}

let deleteDocAccount = function (cb) {
  this.remove((err, result) => {
    if (err) return cb(err)
    else return cb(null, result)
  })
}

module.exports = {
  findDocAccount,
  insertDocAccount,
  updateDocAccount,
  deleteDocAccount
}
