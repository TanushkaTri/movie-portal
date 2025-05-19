const FavouriteMovie = require("../models/FavouriteMovie");
const { ObjectId } = require("mongodb");

exports.addFavourite = async (req, res) => {
  try {
    const favourite = await FavouriteMovie.create(req.body);
    res.status(201).send(favourite);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAllFavourites = async (req, res) => {
  try {
    const favourites = await FavouriteMovie.find();
    res.send(favourites);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getFavouriteById = async (req, res) => {
  try {
    const { id } = req.params;
    const favourite = await FavouriteMovie.findById(id);
    res.send(favourite);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getFavouritesByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const favourites = await FavouriteMovie.find({ email });
    res.send(favourites);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteFavourite = async (req, res) => {
  try {
    const { id } = req.params;
    await FavouriteMovie.findByIdAndDelete(id);
    res.send({ message: "Favourite movie deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
