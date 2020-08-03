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


const todo = mongoose.model('todos', ToDoSchema);
module.exports = todo;