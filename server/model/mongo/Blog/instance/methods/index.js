
let findBlog = function (cb) {
  return this.model('Blog').find({}, cb)
}

let insertBlog = function (cb) {
  return this.save(cb)
}

let updateBlog = function (cb) {
  return 
}

module.exports = {
  findBlog,
  insertBlog
}
