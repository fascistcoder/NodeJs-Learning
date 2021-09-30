"use strict";
const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes....";
};

// Add a new note
const addNote = (title, author, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      author: author,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added"));
  } else {
    console.log(chalk.red.inverse("Note title taken"));
  }
};

// Remove a note
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notesToKeep.length < notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse`${title} removed`);
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

// List all notes
const listNotes = () => {
  console.log(chalk.bold.cyan.inverse("Your notes"));
  const notes = loadNotes();
  notes.forEach((listNote) => {
    console.log(listNote.title);
  });
};

//Read a note
const readNotes = (title) => {
  console.log(chalk.bold.cyan.inverse("Reading the notes"));
  const notes = loadNotes();
  const findNote = notes.find((note) => note.title === title);
  if (findNote) {
    console.log(chalk.bold.white.inverse(`title : ${title}`));
    console.log(`author : ${findNote.author}`);
    console.log(`body : ${findNote.body}`);
  } else {
    console.log(chalk.red.inverse("ERROR: No notes found"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
