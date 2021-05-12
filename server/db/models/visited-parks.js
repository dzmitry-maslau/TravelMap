const Sequelize = require("sequelize");
const db = require("../db");

const VisitedParks = db.define("visited-parks", {
  park: {
    type: Sequelize.STRING,
  },
});

module.exports = VisitedParks;
