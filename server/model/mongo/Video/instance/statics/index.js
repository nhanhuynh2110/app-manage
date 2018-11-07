
let findItemBlog = function (a, cb) {
  return this.find({}, cb)
  // return this.model('Blog').find({}, cb)
}
let findItemBlog1 = function (a, cb) {
  return this.find({}, cb)
  // return this.model('Blog').find({}, cb)
}

module.exports = {
  findItemBlog,
  findItemBlog1
}
