const Sequelize = require("sequelize");
const db = require("../db");

const Country = db.define("country", {
  country: {
    type: Sequelize.STRING,
  },
  countryId: {
    type: Sequelize.INTEGER,
  },
  capital: {
    type: Sequelize.STRING,
  },
  flag: {
    type: Sequelize.STRING,
  },
  population: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Country;
