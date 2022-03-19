const Contact = require('../models/contactModel');

exports.getAllContacts = async function (req, res, next) {
  try {
    const contacts = await Contact.find();

    res.status(200).json({
      status: 'success',
      results: contacts.length,
      data: contacts,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createContact = async function (req, res, next) {
  try {
    const newContacts = await Contact.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        contact: newContacts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getContactById = async function (req, res, next) {
  try {
    const contact = await Contact.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        contact,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateContact = async function (req, res, next) {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: { contact },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteContact = async function (req, res, next) {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
