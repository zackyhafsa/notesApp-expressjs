const notes = [];

const getAllNotes = (req, res) => {
  res.json(notes);
};

const getNoteById = (req, res) => {
  const id = req.params.id;
  const note = notes.find((note) => note.id === id);
  if (!note) {
    return res.status(400).json({ message: "Notes tidak ditemukan" });
  }

  res.json(note);
};

const addNote = (req, res) => {
  const { title, content } = req.body;
  const newNote = {
    id: Date.now().toString(),
    title,
    content,
  };
  notes.push(newNote);
  res.send("Notes sudah ditambahkan");
  res.status(201);
};

const updateNote = (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  const note = notes.findIndex((note) => note.id === id);
  if (note === -1) {
    return res.status(400).json({ message: "Note tidak ditemuka" });
  }

  notes[note] = { id, title, content };
  res.send("Note berhasil diubah").status(200);
};

const deleteNote = (req, res) => {
  const id = req.params.id;
  const note = notes.findIndex((note) => note.id === id);
  if (note === -1) {
    return res.status(400).json({ message: "Note tidak ditemukan" });
  }

  notes.splice(note, 1);
  res.send("note berhasil dihapus").statur(201);
};

module.exports = {
  getAllNotes,
  getNoteById,
  addNote,
  updateNote,
  deleteNote,
};
