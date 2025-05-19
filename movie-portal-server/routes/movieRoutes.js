const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.post("/addmovie", movieController.addMovie);
router.get("/addmovie", movieController.getMovies);
router.get("/feturemovie", movieController.getFeaturedMovies);
router.get("/addmovie/:id", movieController.getSingleMovie);
router.patch("/addmovie/:id", movieController.updateMovie);
router.delete("/addmovie/:id", movieController.deleteMovie);

module.exports = router;
