const express = require('express');
const morgan = require('morgan');
const contactRouter = require('./routes/contactRoutes');
const userRouter = require('./routes/userRoutes');
const phoneCodeRouter = require('./routes/phoneCodeRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();
app.use(express.json({ limit: '10kb' }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/contacts', contactRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/phone-codes', phoneCodeRouter);

// note: GLOBAL ERROR HANDLING MIDDLEWARE
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler);

module.exports = app;
