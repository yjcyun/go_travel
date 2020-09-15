const multer = require('multer');
const sharp = require('sharp');
const User = require('../models/userModel');
const Booking = require("../models/bookingModel");
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');
const Tour = require('../models/tourModel');

//  MULTER
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'client/public/users');
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split('/')[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   }
// });

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image. Please upload only images', 400), false);
  }
}

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`client/public/users/${req.file.filename}`);

  next();
})

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  })
  return newObj;
}

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
}

// USER UPDATING ONESELF
exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError('This route is not for password update. Please use /updateMyPassword', 400));
  }
  // 2) Filter out unwanted fields name that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'email');
 
  if (req.file) filteredBody.photo = req.file.filename;

  // 3) Update user doc
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, { new: true, runValidators: true });

  res.status(200).json({
    status: 'success',
    data: { user: updatedUser }
  })
})

// USER TRYING TO DELETE ONESELF
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null
  })
})

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined. Please use /signup instead'
  })
}

exports.getMyTours = catchAsync(async (req, res, next) => {
  // 1) Find all bookings
  const bookings = await Booking.find({ user: req.user.id });

  // 2) Find tours with the returned IDs
  const tourIDs = bookings.map(el => el.tour);
  const tours = await Tour.find({ _id: { $in: tourIDs } });

  res.status(200).json({
    status: 'success',
    tours
  })
})



exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User);

// ADMIN UPDATES USER - DATA EXCLUDING PASSWORD
exports.updateUser = factory.updateOne(User);
// ADMIN DELETES USER
exports.deleteUser = factory.deleteOne(User);