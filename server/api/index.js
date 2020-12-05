const router = require("express").Router();
module.exports = router;

router.use("/users", require("./routes/users"));
router.use("/countries", require("./routes/countries"));
router.use("/states", require("./routes/states"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});