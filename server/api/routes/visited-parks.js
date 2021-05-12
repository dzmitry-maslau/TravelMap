const router = require("express").Router();
const { VisitedParks } = require("../../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const parkList = await VisitedParks.findAll({
      where: {
        userId: req.user.id,
      },
    });
    res.json(parkList);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const park = await VisitedParks.findByPk(req.params.id, {
      include: { all: true },
    });
    res.send(park);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newPark = await VisitedParks.create(req.body);
    res.send(newPark);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await VisitedParks.destroy({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
