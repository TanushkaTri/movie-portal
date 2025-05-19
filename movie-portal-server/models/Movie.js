const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
  displayName: { type: String, default: null },
  duration: { type: String, required: true },
  email: { type: String, required: true },
  genre: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  releaseYear: { type: String, required: true },
  summary: { type: String, required: true },
  title: { type: String, required: true },
}, {
  collection: 'movies',
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
