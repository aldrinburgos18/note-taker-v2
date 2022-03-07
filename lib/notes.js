function findById(id, notesArr) {
  const result = notesArr.filter((notes) => notes.id === id)[0];
  return result;
}

module.exports = {
  findById,
};
