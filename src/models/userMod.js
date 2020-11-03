//*modelo de usuarios (users) en mongoose

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UniqueValidator = require('mongoose-unique-validator')

const UserSchema = Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    select: false
  },
  signupDate: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: Boolean,
    default: true
  },
  lastLogin: Date,
});

module.exports = mongoose.model('user', UserSchema.plugin(UniqueValidator))