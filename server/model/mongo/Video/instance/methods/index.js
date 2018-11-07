
let findBlog = function (a, cb) {
  console.log(this.hidden)
  return this.model('Blog').find({}, cb)
}

module.exports = {
  findBlog
}
