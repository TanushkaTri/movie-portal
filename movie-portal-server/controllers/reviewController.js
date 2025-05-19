const Review = require("../models/Review");
const { ObjectId } = require("mongodb");

exports.addReview = async (req, res) => {
  try {
    const reviewData = {
      movieId: req.body.movieId,
      authorName: req.body.authorName || "Аноним",
      rating: parseInt(req.body.rating),
      text: req.body.text,
      createdAt: new Date(),
    };
    const review = await Review.create(reviewData);
    res.status(201).send(review);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getReviewsByMovieId = async (req, res) => {
  try {
    const { movieId } = req.params;
    const reviews = await Review.find({ movieId }).sort({ createdAt: -1 });
    res.send(reviews);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    await Review.findByIdAndDelete(id);
    res.send({ message: "Review deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
