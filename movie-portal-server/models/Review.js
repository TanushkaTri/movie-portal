const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
  authorName: { type: String, required: true },
  createdAt: { type: Date, required: true },
  isApproved: { type: Boolean, default: false },
  movieId: { type: String, required: true },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
  userId: { type: String },
}, {
  collection: 'reviews',
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
