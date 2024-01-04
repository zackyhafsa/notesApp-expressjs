const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { getAllNotes, addNote, getNoteById, updateNote, deleteNote } = require("./routes/routes");

app.use(bodyParser.json());
app.get("/notes", getAllNotes);
app.get("/notes/:id", getNoteById);
app.post("/notes", addNote);
app.put("/notes/:id", updateNote);
app.delete("/notes/:id", deleteNote);

app.listen(port, () => console.log(`server sedang berjalan di http://localhost:3000`));
