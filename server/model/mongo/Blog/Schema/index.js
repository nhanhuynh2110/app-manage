var mongoose = require('mongoose')
var Schema = mongoose.Schema

let model = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  name: {
    type: String
  },
  body: {
    type: String
  },
  color: String
})

// model.path('color').validate(function (value) {
//   console.log('this this', this, value)
//   // When running in `validate()` or `validateSync()`, the
//   // validator can access the document using `this`.
//   // Does **not** work with update validators.
//   if (this.name.toLowerCase().indexOf('red') !== -1) {
//     return value !== 'red'
//   }
//   return true
// })

module.exports = model
