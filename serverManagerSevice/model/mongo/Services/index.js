var mongoose = require('mongoose')
let mySchema = require('./Schema')

// mySchema.schema.path('color').validate(function (value) {
//   return /blue|green|white|red|orange|periwinkle/i.test(value)
// }, 'Invalid color')

require('./instance')(mySchema)
let model = mongoose.model('Services', mySchema)

module.exports = model
