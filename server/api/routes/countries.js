const router = require("express").Router();
const { Country } = require("../../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    if (!req.user) return null;
    const countryList = await Country.findAll({
      where: {
        userId: req.user.id,
      },
    });
    res.json(countryList);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const country = await Country.findByPk(req.params.id, {
      include: { all: true },
    });
    res.send(country);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newCountry = await Country.create(req.body);
    res.send(newCountry);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Country.destroy({
      where: {
        countryId: req.params.id,
        userId: req.user.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
