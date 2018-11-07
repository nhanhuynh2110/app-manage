var mongoose = require('mongoose')
let mySchema = require('./Schema')

// mySchema.schema.path('color').validate(function (value) {
//   return /blue|green|white|red|orange|periwinkle/i.test(value)
// }, 'Invalid color')

require('./instance')(mySchema)
let model = mongoose.model('Account', mySchema)

module.exports = model
