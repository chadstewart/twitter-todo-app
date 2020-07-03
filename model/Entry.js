const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema(
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


const entry = mongoose.model('To-Dos', entrySchema);
module.exports = entry;