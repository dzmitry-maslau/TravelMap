const Sequelize = require("sequelize");
const db = require("../db");

const State = db.define("state", {
  state: {
    type: Sequelize.STRING,
  },
  stateId: {
    type: Sequelize.INTEGER,
  },
});

module.exports = State;
