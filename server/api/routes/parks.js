const router = require("express").Router();
const { Park } = require("../../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const parkList = await Park.findAll({});
    res.json(parkList);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const park = await Park.findByPk(req.params.id, {
      include: { all: true },
    });
    res.send(park);
  } catch (error) {
    next(error);
  }
});
