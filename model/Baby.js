const mongoose = require('mongoose')

const BabySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
      min: 1,
      max: 2
    },
    gender: {
      type: String,
      require: false,
      enum: ['male', 'female', 'undefined']
    },
    address: {
      type: String,
      require: true
    },
    city: {
      type: String,
      default: "Calgary"
    },
    phone: {
      type: String,
      require: true,
      max: 10,
      min: 10
    },
    contacts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Caretaker"
    }],
    logbook: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Logbook"
    }]
  },
  {
    timestamps: true
  }
)


const Baby = mongoose.model('Baby', BabySchema)


module.exports = Baby