const mongoose = require('mongoose');

const phoneCodeSchema = new mongoose.Schema({
  code: String,
  dial_code: String,
});

const PhoneCode = mongoose.model('PhoneCode', phoneCodeSchema);
module.exports = PhoneCode;
