const ctrlAuth = require('../controllers/authentication');
const ctrlProfile = require('../controllers/profile');
const express = require('express');
const jwt = require('express-jwt');
const router = express.Router();
var mongoose = require('mongoose');
let User = mongoose.model('User');
let multer = require('multer');

const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

// // Multer File upload settings
// const DIR = './images/';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, DIR);
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname.toLowerCase().split(' ').join('-');
//     cb(null, fileName)
//   }
// });


// // Multer Mime Type Validation
// var upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5
//   },
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//     }
//   }
// });


// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// Update student
router.route('/edit/:id').put((req, res, next) => {
  User.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Student successfully updated!')
    }
  })
})

// Get single student
router.route('/read/:id').get((req, res) => {
  User.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get all student
router.route('/').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = router;
