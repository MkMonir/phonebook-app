const express = require('express');
const phoneCodeController = require('./../controllers/phoneCodeController');

const router = express.Router();

router
  .route('/')
  .get(phoneCodeController.getAllPhoneCodes)
  .post(phoneCodeController.createPhoneCode);

router
  .route('/:id')
  .get(phoneCodeController.getPhoneCodeById)
  .patch(phoneCodeController.updatePhoneCode)
  .delete(phoneCodeController.deletePhoneCode);

module.exports = router;
