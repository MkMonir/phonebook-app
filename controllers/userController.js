const User = require('./../models/userModel');
const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

const filterObj = (obj, ...allowfields) => {
  let newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowfields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    next(new AppError('Please use /updateMyPassword route for updating your password', 400));
  }

  const filteredBody = filterObj(req.body, 'email', 'name');

  const updateUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updateUser,
    },
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    message: 'please use /signUp insted',
  });
};

exports.getAllUsers = factory.getAll(User);

exports.getUserById = factory.getOne(User);

exports.updateUser = factory.updateOne(User);

exports.deleteUser = factory.deleteOne(User);
