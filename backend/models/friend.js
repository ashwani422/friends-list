import mongoose from "mongoose"

const friendSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const Friend = mongoose.model('friend', friendSchema)

export default Friend