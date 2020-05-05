const express = require('express');
const app = express();
const reviewsRoute = express.Router();

// Bookings model
let Reviews = require('../models/reviews');

reviewsRoute.route("").post((req, res, next) => {
  Reviews.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

reviewsRoute.route("").get((req, res) => {
  Reviews.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = reviewsRoute;