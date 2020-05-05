const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Reviews = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
},
  {
    collection: 'reviews'
  });

module.exports = mongoose.model('Reviews', Reviews)