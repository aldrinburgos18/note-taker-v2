const fs = require("fs");
const path = require("path");

function findById(id, notesArr) {
  const result = notesArr.filter((notes) => notes.id === id)[0];
  console.log(notesArr[0]);
  return result;
}

function validateNote(body) {
  if (!body.title || !body.text) {
    return false;
  }
  return true;
}

function createNote(body, notesArr) {
  const note = body;
  notesArr.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArr),
    null,
    2
  );
  return note;
}

function deleteNote(id, notesArr) {
  index = notesArr.findIndex((note) => note.id === id);
  notesArr.splice(index, 1);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArr),
    null,
    2
  );
  return notesArr;
}

module.exports = {
  findById,
  validateNote,
  createNote,
  deleteNote,
};
