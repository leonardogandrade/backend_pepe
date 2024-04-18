import mongoose from "mongoose"

export const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  name: {type: String, required: true},
  password: {type: String, required: true},
  vs: {type: String},
  project: {type: String},
  cargo: {type: String},
  birthday: {type: String}
})

const User: any = mongoose.model('User', userSchema, 'UsersCollection')
// console.log(User);

export default User;