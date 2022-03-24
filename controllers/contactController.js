const Contact = require('./../models/contactModel');
const factory = require('./handlerFactory');

exports.hideContact = async (req, res, next) => {
  await Contact.findByIdAndUpdate(req.params.id, { hide: true });

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

exports.getAllContacts = factory.getAll(Contact);

exports.createContact = factory.createOne(Contact);

exports.getContactById = factory.getOne(Contact);

exports.updateContact = factory.updateOne(Contact);

exports.deleteContact = factory.deleteOne(Contact);
