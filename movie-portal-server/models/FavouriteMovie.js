const mongoose = require('mongoose');

const favouriteMovieSchema = new mongoose.Schema({
  duration: { type: String, required: true },
  email: { type: String, required: true },
  genre: { type: String, default: null },
  image: { type: String, required: true },
  rating: { type: Number, default: null },
  releaseYear: { type: String, default: null },
  summary: { type: String, required: true },
  title: { type: String, required: true },
}, {
  collection: 'favouriteMovie',
});

const FavouriteMovie = mongoose.model('FavouriteMovie', favouriteMovieSchema);
module.exports = FavouriteMovie;
