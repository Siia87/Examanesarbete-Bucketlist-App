import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

  Firstname: {
    type: String,
    requireed: true
  },
  Lastname: {
    type: String,
    requireed: true
  },
  Email: {
    type: String,
    requireed: true
  },
  Password: {
    type: String,
    requireed: true
  },
},
  { versionKey: false }
)
const Users = mongoose.model('Users', userSchema)

export default Users