const Sequelize = require("sequelize");

const databaseName = "TravelMap";
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  process.env.DATABASE_URL
    ? {
        logging: false,
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {
        logging: false,
      }
);
module.exports = db;
