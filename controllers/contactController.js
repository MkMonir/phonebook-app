const Contact = require('./../models/contactModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllContacts = catchAsync(async function (req, res, next) {
  const contacts = await Contact.find();

  res.status(200).json({
    status: 'success',
    results: contacts.length,
    data: contacts,
  });
});

exports.createContact = catchAsync(async function (req, res, next) {
  const newContacts = await Contact.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      contact: newContacts,
    },
  });
});

exports.getContactById = catchAsync(async function (req, res, next) {
  const contact = await Contact.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      contact,
    },
  });
});

exports.updateContact = catchAsync(async function (req, res, next) {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: { contact },
  });
});

exports.deleteContact = catchAsync(async function (req, res, next) {
  await Contact.delete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
