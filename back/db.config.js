const Sequelize = require("sequelize");

const sequelize = new Sequelize("GroupomaniaDB", "root", "UtraMYSQLbrome04!", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
