const router = require("express").Router();

const { findById, validateNote, createNote } = require("../../lib/notes");

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

router.post("/notes", (req, res) => {
  //set id
  req.body.id = notes.length.toString();

  if (!validateNote(req.body)) {
    console.log("Note is not propery formatted!");
  } else {
    const note = createNote(req.body, notes);
    res.json(note);
  }
});

module.exports = router;
