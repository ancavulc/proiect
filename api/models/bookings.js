const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bookings = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  session: {
    type: String,
    required: true
  },
  requirements: {
    type: String,
    required: true
  },
  slope: {
    type: String,
    required: true
  }
},
  {
    collection: 'bookings'
  });

module.exports = mongoose.model('Bookings', Bookings)