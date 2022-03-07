const NotesModel = require('./notesModel')

describe('NotesModel', () => {
  beforeEach(() => {
    model = new NotesModel();
  })
  describe('getNotes', () => {
    it('at the start getNotes returns no notes', () => {
      expect(model.getNotes()).toEqual([]);
    })
    it('returns a list of notes', () => {
      model.addNote('Buy Milk');
      model.addNote('Go to the gym');
      expect(model.getNotes()).toEqual(['Buy Milk', 'Go to the gym']);
    })    
  })

  describe('addNote', () => {
    it('adds a note', () => {
      model.addNote('Buy Milk')
      expect(model.notes).toEqual(['Buy Milk']);
    })
  })

  describe('reset', () => {
    it('clears notes', () => {
      model.addNote('Buy Milk')
      model.reset();
      expect(model.getNotes()).toEqual([]);
    })
  })

})