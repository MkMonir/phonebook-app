const PhoneCode = require('./../models/phoneCodeModel');
const factory = require('./handlerFactory');

exports.getAllPhoneCodes = factory.getAll(PhoneCode);

exports.createPhoneCode = factory.createOne(PhoneCode);

exports.getPhoneCodeById = factory.getOne(PhoneCode);

exports.updatePhoneCode = factory.updateOne(PhoneCode);

exports.deletePhoneCode = factory.deleteOne(PhoneCode);
