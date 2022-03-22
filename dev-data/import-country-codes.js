const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const PhoneCode = require('./../models/phoneCodeModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful'));

const phoneCodes = JSON.parse(fs.readFileSync(`${__dirname}/country-code.json`, 'utf-8'));

const importData = async () => {
  try {
    await PhoneCode.create(phoneCodes);
    console.log('Data successfully loaded');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
if (process.argv[2] === '--import') {
  importData();
}
