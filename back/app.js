const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
// const likeRoutes = require('./routes/like');

const sequelize = require("./database");

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const app = express();

app.use(bodyparser.json());
app.use(express.json());

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

// app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/auth", userRoutes);
app.use("/api/posts", postRoutes);
// app.use('/api/posts', likeRoutes)

module.exports = app;
