const router = require("express").Router();

const { findById } = require("../../lib/notes");

const notes = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let results = notes;
  console.log(results);
  res.json(results);
});

router.get("/notes/:id", (req, res) => {
  let result = findById(req.params.id, notes);
  console.log(req.params.id);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
