const db = require("./server/db");
const { green, red } = require("chalk");
const { User, Country, State } = require("./server/db/models");

const seed = async () => {
  await db.sync({ force: true });

  const userList = [
    {
      email: "d@d.ddd",
      password: "1",
      firstName: "Dima",
      isAdmin: false,
    },
    {
      email: "dima7maslovv@gmail.com",
      password: "123",
      firstName: "Dzmitry",
      isAdmin: false,
    },
  ];

  const CountryList = [
    {
      country: "Belarus",
      countryId: 36,
      capital: "Minsk",
      flag: "https://restcountries.eu/data/blr.svg",
      population: 9498700,
      userId: 1,
    },
    {
      country: "Belarus",
      countryId: 36,
      capital: "Minsk",
      flag: "https://restcountries.eu/data/blr.svg",
      population: 9498700,
      userId: 2,
    },
  ];

  const StateList = [
    {
      state: "Utah",
      stateId: 49,
      userId: 1,
    },
    {
      state: "Utah",
      stateId: 49,
      userId: 2,
    },
  ];

  await Promise.all(
    userList.map((user) => {
      return User.create(user);
    })
  );

  await Promise.all(
    CountryList.map((country) => {
      return Country.create(country);
    })
  );

  await Promise.all(
    StateList.map((state) => {
      return State.create(state);
    })
  );

  console.log(green("Seeding success!"));
  db.close();
};

seed().catch((err) => {
  console.error(red("Oh noes! Something went wrong!"));
  console.error(err);
  db.close();
});

module.exports = {
  seed,
};
