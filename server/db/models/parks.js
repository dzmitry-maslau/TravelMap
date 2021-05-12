const Sequelize = require("sequelize");
const db = require("../db");

const Park = db.define("park", {
  park: {
    type: Sequelize.STRING,
  },
  smallImage: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  latitude: {
    type: Sequelize.STRING,
  },
  longitude: {
    type: Sequelize.STRING,
  },
  dateEstablished: {
    type: Sequelize.STRING,
  },
  areaAcres: {
    type: Sequelize.STRING,
  },
  areakm2: {
    type: Sequelize.STRING,
  },
  recreationVisitors2019: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = Park;
