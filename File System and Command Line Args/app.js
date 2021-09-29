"use strict";

/*
////////////////////////////////////////////////////////////////////////////
// Lecture 15
const chalk = require("chalk");
const getNotes = require("./notes.js");

const command = process.argv[2];

console.log(process.argv);

if (command === "add") {
  console.log("Adding note");
} else if (command === "remove") {
  console.log("Removing note");
}

////////////////////////////////////////////////////////////////////////////
*/

/*
////////////////////////////////////////////////////////////////////////////
// Lecture 16
// Lecture 17

const yargs = require("yargs");
const chalk = require("chalk");
const getNotes = require("./notes.js");

//Customize yargs with version
yargs.version("1.1.0");

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    author: {
        describe: "Author name",
        demandOption: true,
        type: "string",
      },
    body: {
        describe: "Note body",
        demandOption: true,
        type: "string",
    }
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Author: " + argv.author);
    console.log("Body: " + argv.body);
  },
});

//Create Remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all note");
  },
});

yargs.parse();

// console.log(process.argv);
// console.log(yargs.argv);
////////////////////////////////////////////////////////////////////////////
*/

const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes.js");

//Customize yargs with version
yargs.version("1.1.0");

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    author: {
      describe: "Author name",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.author, argv.body);
  },
});

//Create Remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes();
  },
});

yargs.parse();
