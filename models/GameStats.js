const mongoose = require('mongoose');

// My users DB schema

const UserSchema = new mongoose.Schema({
  Field: {
    type: String,
    required: true,
  },
  Time: {
    type: String,
    required: true,
  },
  Opponent: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// OR  module.exports = User = mongoose.model('user', UserSchema)
const User = mongoose.model('User', UserSchema);
module.exports = User;
