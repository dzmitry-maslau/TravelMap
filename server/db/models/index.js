const User = require("./user");
const Country = require("./country");
const State = require("./state");

User.hasMany(Country);
Country.belongsTo(User);

User.hasMany(State);
State.belongsTo(User);

module.exports = {
  User,
  Country,
  State,
};
