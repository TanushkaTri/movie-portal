require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDB = require('./config/db');

const movieRoutes = require("./routes/movieRoutes");
const favouriteRoutes = require("./routes/favouriteRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// бд
connectDB();

// Routes
app.use("/", movieRoutes);
app.use("/", favouriteRoutes);
app.use("/", reviewRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
