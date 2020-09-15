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
  { name: 'images', maxCount: 3 }
]);

// upload.array('images',5)

exports.resizeTourImages = catchAsync(async (req, res, next) => {
 if (!req.files.imageCover || !req.files.images) return next();

  const tourName = slugify(req.body.name);

  // 1) Cover Image
  req.files.imageCover.filename = `tour-${tourName}-${Date.now()}-cover.jpeg`;

  await sharp(req.files.imageCover[0].buffer)
    .resize(2000, 1333)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`client/public/tours/${req.files.imageCover.filename}`);

  // 2) Images
  // req.body.images = [];
  // await Promise.all(
  //   req.files.images.map(async (file, i) => {
  //     const filename = `tour-${tourName}-${Date.now()}-${i + 1}.jpeg`;

  //     await sharp(file.buffer)
  //       .resize(2000, 1333)
  //       .toFormat('jpeg')
  //       .jpeg({ quality: 90 })
  //       .toFile(`client/public/tours/${filename}`);

  //     req.body.images.push(filename);
  //   })
  // )
  next();
});

exports.createTour = catchAsync(async (req, res, next) => {
  const filteredBody = filterObj(req.body, 'name', 'price', 'difficulty', 'maxGroupSize', 'summary', 'duration', 'imageCover', 'images');

  //if (req.files) filteredBody.imageCover = req.files.imageCover.filename;
  //if (req.files) filteredBody.images = req.body.images;

  // 3) Update user doc
  const doc = await Tour.create(filteredBody);

  res.status(201).json({
    status: 'success',
    data: { data: doc }
  });
})

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
}

exports.getAllTours = factory.getAll(Tour);
exports.getTour = factory.getOne(Tour, { path: 'reviews' });



const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  })
  return newObj;
}

exports.updateTour = factory.updateOne(Tour);
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