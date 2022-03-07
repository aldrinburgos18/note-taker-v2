const router = require("express").Router();

const {
  findById,
  validateNote,
  createNote,
  deleteNote,
} = require("../../lib/notes");

const notes = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.get("/notes/:id", (req, res) => {
  let result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }
});

router.post("/notes", (req, res) => {
  //set id
  if (!notes.length) {
    req.body.id = "0";
  } else {
    //get last element of array's id then add 1
    const id = (Number(notes.slice(-1)[0].id) + 1).toString();
    req.body.id = id;
  }

  if (!validateNote(req.body)) {
    console.log("Note is not propery formatted!");
  } else {
    const note = createNote(req.body, notes);
    res.json(note);
  }
});

router.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  const deletedNote = deleteNote(id, notes);
  res.json(deletedNote);
});

module.exports = router;
