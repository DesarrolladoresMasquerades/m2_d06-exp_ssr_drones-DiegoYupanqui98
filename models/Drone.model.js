// Iteration #1
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const droneSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: Number,
},
  {
    timestamps: true
  }
);

// const Author = model('Author', authorSchema);
// module.exports = Author;

module.exports = model('Drone', droneSchema);