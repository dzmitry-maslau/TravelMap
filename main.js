"use strict";

const db = require("./server/db");
const app = require("./server");
const PORT = process.env.PORT || 1337;

db.sync().then(() => {
  console.log("Db synced");
  app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
});
