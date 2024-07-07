const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  address: String,
  contact_number: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;
