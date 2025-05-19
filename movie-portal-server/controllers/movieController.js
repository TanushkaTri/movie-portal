const Movie = require("../models/Movie");
const Review = require("../models/Review");
const { ObjectId } = require("mongodb");

exports.addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).send(movie);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getMovies = async (req, res) => {
  try {
    const { serchParams, year, genre } = req.query;
    const filter = {};

    if (serchParams) filter.title = { $regex: serchParams, $options: "i" };
    if (year) filter.releaseYear = year;
    if (genre) filter.genre = genre;

    const movies = await Movie.find(filter);
    res.send(movies);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getFeaturedMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ rating: -1 }).limit(6);
    res.send(movies);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSingleMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    const reviews = await Review.find({ movieId: id }).sort({ createdAt: -1 });

    res.send({ ...movie._doc, reviews });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    res.send(updatedMovie);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    res.send({ message: "Movie deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
