const router = require("express").Router();

const notes = require("../../db/db.json");
console.log(notes);

router.get("/notes", (req, res) => {
  let results = notes;
  console.log(results);
  res.json(results);
});

router.get("/notes:id", (req, res) => {
  let results = findById(req.params.id);
  res.json(results);
});

module.exports = router;
