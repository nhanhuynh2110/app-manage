var mongoose = require('mongoose')
var Schema = mongoose.Schema

let model = new Schema({
  code: { type: String, required: true },
  company: { type: String, required: true },
  spokesman: { type: String, required: true },
  phone: { type: String, required: true },
  secretCompany: { type: String, required: true },
  createDate: { type: Date, required: true, default: new Date() },
  lastModify: { type: Date },
  active: { type: Boolean, required: true, default: false },
  delete: { type: Boolean, required: true, default: false },
  listAppRegister: { type: Array }
})

module.exports = model
