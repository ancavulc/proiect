const express = require('express');
const app = express();
const bookingsRoute = express.Router();

// Bookings model
let Bookings = require('../models/bookings');

bookingsRoute.route('/book').post((req, res, next) => {
  Bookings.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = bookingsRoute;