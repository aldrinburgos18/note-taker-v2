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
    JSON.stringify(notesArr)
  );
  return note;
}

module.exports = {
  findById,
  validateNote,
  createNote,
};
