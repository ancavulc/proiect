const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Messages = new Schema({
  quest1: {
    type: String,
    unique: true
  },
  quest2: {
    type: String,
    required: true
  },
  quest3: {
    type: String,
    required: true
  },
  quest4: {
    type: String,
    required: true
  },
  quest5: {
    type: String,
    required: true
  }
},
  {
    collection: 'messages'
  });

module.exports = mongoose.model('Messages', Messages)