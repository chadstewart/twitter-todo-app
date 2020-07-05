const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema(
  {
      entry: {
          type: String,
          required: true
      },
      date: {
          type: Date,
          default: Date.now
      },
  }
)


module.exports = mongoose.model('todos', ToDoSchema);