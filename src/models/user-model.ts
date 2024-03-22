import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  name: {type: String, required: true},
  password: {type: String, required: true},
  vs: {type: String},
  project: {type: String},
  cargo: {type: String},
  birthday: {type: String}
})

export const User = mongoose.model('User', userSchema, 'collection')