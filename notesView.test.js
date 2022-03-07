/**
 * @jest-environment jsdom
 */

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const fs = require('fs');
const { isTypedArray } = require('util/types');

describe("Page View", () => {
  it('displays 2 notes', () => {
    const notesModel = new NotesModel;
  notesModel.addNote('note1');
  notesModel.addNote('note2');
  document.body.innerHTML = fs.readFileSync('./index.html');

  const notesView = new NotesView(notesModel);
  notesView.displayNotes();
  expect(document.querySelectorAll('div.note').length).toBe(2);
  })
  
})
