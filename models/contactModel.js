const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A contact must have a name'],
    unique: true,
    trim: true,
  },
  number: {
    type: Number,
    required: [true, 'A contact must have a number'],
  },
  email: {
    type: String,
    validate: [validator.isEmail, 'Please provide a valid email'],
    lowercase: true,
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  hide: {
    type: Boolean,
    default: false,
  },
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
