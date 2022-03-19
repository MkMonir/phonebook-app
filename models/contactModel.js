const mongoose = require('mongoose');

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
    min: [10, 'A contact number must be less than 10'],
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
