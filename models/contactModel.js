const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A contact must have a name'],
    trim: true,
    unique: true,
  },
  number: {
    type: [Number],
    required: [true, 'A contact must have a number'],
    unique: true,
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
  company: {
    type: String,
    trim: true,
  },
  jobTitle: {
    type: String,
    trim: true,
  },
  hide: {
    type: Boolean,
    default: false,
  },
});

contactSchema.pre(/^find/, function (next) {
  this.find({ hide: { $ne: true } });
  next();
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
