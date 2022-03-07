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

module.exports = {
  findById,
  validateNote,
};
