const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
// const User = require('./userModel');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour name is a required field'],
    unique: true,
    trim: true,
    maxlength: [40, 'A tour name must have less than 40 characters'],
    minlength: [10, 'A tour name must be at least 10 characters'],
    // validate: [validator.isAlpha, 'Tour name must only contain characters']
  },
  slug: String,
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration']
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a max group size']
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have difficulty'],
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty should be: easy, medium or difficuty'
    }
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be greater than 1'],
    max: [5, 'Rating must less than 5'],
    set: val => Math.round(val * 10) / 10
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  },
  priceDiscount: {
    type: Number,
    validate: {
      validator: function (val) {
        return val < this.price; // only works for .create
      },
      message: 'Discount price should be less than regular price'
    }
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a description']
  },
  description: {
    type: String,
    trim: true
  },
  imageCover: {
    type: String,
    //required: [true, 'A tour must have a cover image']
  },
  image1: String,
  image2: String,
  image3: String,
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  startDates: [Date],
  secretTour: {
    type: Boolean,
    default: false
  },
  startLocation: {
    type: String
  },
  locations: [
    {
      type: String,
      address: String,
      description: String,
      day: Number
    }
  ],
  featured: Boolean,
  guides: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Improve read performance with Indexes
tourSchema.index({ price: 1, ratingsAverage: -1 });
tourSchema.index({ slug: 1 });


// VIRTUAL POPULATE
tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id'
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

//// EMBED GUIDES
// tourSchema.pre('save', async function (next) {
//   const guidesPromises = this.guides.map(async id => await User.findById(id));
//   this.guides = await Promise.all(guidesPromises);
// });

// QUERY MIDDLEWARE - secret tours
tourSchema.pre(/^find/, function (next) {
  this.find({ secretTour: { $ne: true } });
  this.start = Date.now();
  next();
})

// Populate documents
tourSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'guides',
    select: '-__v -passwordChangedAt'
  })

  next();
})

tourSchema.post(/^find/, function (docs, next) {
  // console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
})


// AGGREGATION MIDDLEWARE
// tourSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
//   next();
// })

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;