"use strict";
const db = {};
const Sequelize = require("sequelize");

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = Sequelize;
db.Sequelize = Sequelize;

module.exports = db;
