const multer = require('multer');
const sharp = require('sharp');
const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');
const slugify = require('slugify');



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

exports.uploadTourImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },
]);


exports.resizeTourImages = catchAsync(async (req, res, next) => {

  if (!req.files.imageCover || !req.files.image1 || !req.files.image2 || !req.files.image3) return next();
  const tourName = slugify(req.body.name);

  // 1) Cover Image
  req.files.imageCover.filename = `tour-${tourName}-${Date.now()}-cover.jpeg`;

  await sharp(req.files.imageCover[0].buffer)
    .resize(2000, 1333)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`client/public/tours/${req.files.imageCover.filename}`);

  // 2) Images
  req.files.image1.filename = `tour-${tourName}-${Date.now()}-1.jpeg`;
  await sharp(req.files.image1[0].buffer)
    .resize(2000, 1333)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`client/public/tours/${req.files.image1.filename}`);

  req.files.image2.filename = `tour-${tourName}-${Date.now()}-2.jpeg`;
  await sharp(req.files.image2[0].buffer)
    .resize(2000, 1333)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`client/public/tours/${req.files.image2.filename}`);

  req.files.image3.filename = `tour-${tourName}-${Date.now()}-3.jpeg`;
  await sharp(req.files.image3[0].buffer)
    .resize(2000, 1333)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`client/public/tours/${req.files.image3.filename}`);
console.log('req.files.image1.filename',req.files.image1.filename)

  next();
});

exports.createTour = catchAsync(async (req, res, next) => {
  console.log('req.files',req.files);
  const filteredBody = filterObj(req.body, 'name', 'price', 'difficulty', 'maxGroupSize', 'summary', 'duration', 'imageCover', 'image1', 'image2', 'image3', 'description', 'startLocation');
  console.log('req.body', req.body)
  if (req.files) filteredBody.imageCover = req.files.imageCover.filename;
  if (req.files) filteredBody.image1 = req.files.image1.filename;
  if (req.files) filteredBody.image2 = req.files.image2.filename;
  if (req.files) filteredBody.image3 = req.files.image3.filename;
  console.log('filteredBody', filteredBody)

  // 3) Update user doc
  const doc = await Tour.create(filteredBody);

  res.status(201).json({
    status: 'success',
    data: { data: doc }
  });
})

exports.updateTour = catchAsync(async (req, res, next) => {
  const filteredBody = filterObj(req.body, 'name', 'price', 'difficulty', 'maxGroupSize', 'summary', 'duration', 'imageCover', 'images', 'description', 'startLocation');
  console.log('Backend-updateTour', req.params)
  if (req.files) filteredBody.imageCover = req.files.imageCover.filename;
  if (req.files) filteredBody.image1 = req.body.image1;
  if (req.files) filteredBody.image2 = req.body.image2;
  if (req.files) filteredBody.image3 = req.body.image3;

  const doc = await Tour.findByIdAndUpdate(req.params.id, filteredBody, {
    new: true,
    runValidators: true
  });

  if (!doc) {
    return next(new AppError('No doc found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: { doc }
  });
});

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
}

exports.getAllTours = factory.getAll(Tour);
exports.getTour = factory.getOne(Tour, { path: 'reviews' });

exports.deleteTour = factory.deleteOne(Tour);

exports.getTourStats = catchAsync(async (req, res, next) => {
  const stats = await Tour.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } }
    },
    {
      $group: {
        _id: { $toUpper: '$difficulty' },
        numTours: { $sum: 1 },
        numRatings: { $sum: '$ratingsQuantity' },
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' }
      }
    },
    {
      $sort: { avgPrice: 1 }
    },
    // {
    //   $match: { _id: { $ne: 'EASY' } }
    // }
  ]);

  res.status(200).json({
    status: 'success',
    data: stats
  });
})

exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1;
  const plan = await Tour.aggregate([
    {
      $unwind: '$startDates'
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`)
        }
      }
    },
    {
      $group: {
        _id: { $month: '$startDates' },
        numTourStarts: { $sum: 1 },
        tours: { $push: '$name' }
      }
    },
    {
      $addFields: { month: '$_id' }
    },
    {
      $project: {
        _id: 0 //id will no longer show up
      }
    },
    {
      $sort: { numTourStarts: -1 } //descending
    },
    {
      $limit: 12
    }
  ])

  res.status(200).json({
    status: 'success',
    data: plan
  });
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  })
  return newObj;
}