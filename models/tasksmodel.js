import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  UserId: {
    type: String,
    requreed: true
  },
  Title: {
    type: String,
    requireed: true
  },
  Desctiption: {
    type: String,
    requireed: false
  },
  Priority: {
    type: Number,
    requireed: true,
    default: 0
  },
  Done: {
    type: boolean,
    requireed: false
  }
},
  { versionKey: false }
)

const Tasks = mongoose.model('Tasks', taskSchema)

export default Tasks