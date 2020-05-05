const express = require('express');
const app = express();
const messagesRoute = express.Router();

// Bookings model
let Messages = require('../models/messages');

messagesRoute.route('/messages').post((req, res, next) => {
  req.setTimeout(0);
  Messages.create(req.body, (error, data) => {
    req.setTimeout(0);
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = messagesRoute;