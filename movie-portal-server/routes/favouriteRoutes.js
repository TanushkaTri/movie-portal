const express = require("express");
const router = express.Router();
const favouriteController = require("../controllers/favouriteController");

router.post("/favourite", favouriteController.addFavourite);
router.get("/favourite", favouriteController.getAllFavourites);
router.get("/favourite/:id", favouriteController.getFavouriteById);
router.get("/api/favourite/:email", favouriteController.getFavouritesByEmail);
router.delete("/favourite/:id", favouriteController.deleteFavourite);

module.exports = router;
