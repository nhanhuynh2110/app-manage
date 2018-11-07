let findDocServices = function (cb) {
  return this.model('Services').find({}, cb)
}

module.exports = {
  findDocServices
}
