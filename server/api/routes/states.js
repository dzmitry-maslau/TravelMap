const router = require("express").Router();
const { State } = require("../../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    if (!req.user) return null;
    const stateList = await State.findAll({
      where: {
        userId: req.user.id,
      },
    });
    res.json(stateList);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const state = await State.findByPk(req.params.id, {
      include: { all: true },
    });
    res.send(state);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newState = await State.create(req.body);
    res.send(newState);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await State.destroy({
      where: {
        stateId: req.params.id,
        userId: req.user.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
