module.exports = (Schema) => {
  Schema.statics = require('./statics')
  Schema.methods = require('./methods')
}
