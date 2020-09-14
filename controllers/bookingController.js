const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Tour = require("../models/tourModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  try {
    // 1) Get currently booked tour
    const tour = await Tour.findById(req.params.tourId);
    // 2) Create chegckout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      success_url: `${req.protocol}://${req.get('host')}/`,
      cancel_url: `${req.protocol}://${req.get('host')}/tours/${tour.id}`,
      customer_email: req.user.email,
      client_reference_id: req.params.tourId,
      line_items: [
        {
          name: `${tour.name} Tour`,
          description: tour.summary,
          // TODO:FIX IMAGE
          images: [`https://www.natours.dev/img/tours/${tour.imageCover}.jpg`],
          amount: tour.price * 100,
          currency: 'cad',
          quantity: 1
        }
      ]
    })

    // 3) Create session as response
    res.status(200).json({
      status: 'success',
      session
    })
  } catch (err) {

  }
})