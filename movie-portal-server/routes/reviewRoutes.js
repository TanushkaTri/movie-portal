const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

router.post("/reviews", reviewController.addReview);
router.get("/reviews/:movieId", reviewController.getReviewsByMovieId);
router.delete("/reviews/:id", reviewController.deleteReview);

module.exports = router;
