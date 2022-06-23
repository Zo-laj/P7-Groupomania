const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const Sequelize = require("sequelize");
// require("dotenv").config();

// const userRoutes = require('./routes/user');
// const sauceRoutes = require('./routes/sauce');
// const likeRoutes = require('./routes/like');

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const app = express();

app.use(bodyparser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// app.use('/images', express.static(path.join(__dirname, 'images')));

// app.use('/api/auth', userRoutes);
// app.use('/api/sauces', sauceRoutes);
// app.use('/api/sauces', likeRoutes)

module.exports = app;