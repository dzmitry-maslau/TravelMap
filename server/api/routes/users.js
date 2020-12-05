const router = require("express").Router();
const { User } = require("../../db/models");
module.exports = router;

router.get(
  "/", async (req, res, next) => {
    try {
      const users = await User.findAll({
        attributes: ["id", "firstName", "email", "isAdmin"],
      });
      res.json(users);
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  "/:id", async (req, res, next) => {
    try {
      const singleUser = await User.findByPk(req.params.id);
      res.json(singleUser);
    } catch (err) {
      next(err);
    }
  }
);

router.delete(
  "/", async (req, res, next) => {
    try {
      await User.destroy({
        where: {
          id: req.body.userId,
        },
      });
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  }
);
