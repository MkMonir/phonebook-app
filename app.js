const express = require('express');
const contactRouter = require('./routes/contactRoutes');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/contacts', contactRouter);

module.exports = app;
