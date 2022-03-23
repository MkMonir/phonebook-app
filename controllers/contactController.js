const Contact = require('./../models/contactModel');
const factory = require('./handlerFactory');

exports.getAllContacts = factory.getAll(Contact);

exports.createContact = factory.createOne(Contact);

exports.getContactById = factory.getOne(Contact);

exports.updateContact = factory.updateOne(Contact);

exports.deleteContact = factory.deleteOne(Contact);
