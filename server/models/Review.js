const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
  review: {
    type: String,
    required: true,
    trim: true,
  },
  tutor_email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  }
});



const Review = model('Review', reviewSchema);

module.exports = Review;
