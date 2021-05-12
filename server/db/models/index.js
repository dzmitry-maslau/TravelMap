const User = require("./user");
const Park = require("./parks");
const State = require("./state");
const Country = require("./country");
const VisitedParks = require("./visited-parks");

User.hasMany(Country);
Country.belongsTo(User);

User.hasMany(State);
State.belongsTo(User);

User.hasMany(VisitedParks);
VisitedParks.belongsTo(User);

module.exports = {
  User,
  Country,
  State,
  Park,
  VisitedParks,
};
