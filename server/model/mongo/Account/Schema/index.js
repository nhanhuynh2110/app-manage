var mongoose = require('mongoose')
var Schema = mongoose.Schema

let model = new Schema({
  code: { type: String, required: true },
  token: { type: Array },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  fullname: { type: String },
  birthday: { type: String },
  address: { type: String },
  phone: { type: String },
  facebook: { type: String },
  gender: { type: String },
  identity_card: { type: String },
  google: { type: String },
  hometown: { type: String },
  is_active: { type: String, required: true, default: 0 },
  is_delete: { type: String, required: true, default: 0 },
  create_date: { type: Date, required: true, default: Date.now },
  update_date: { type: Date },
  active_date: { type: Date },
  avatar: { type: String },
  type: { type: String }
})

module.exports = model
