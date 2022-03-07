class NotesModel{
  constructor(){
    this.notes = []
  }

  getNotes(){
    return this.notes;
  }

  addNote(message){
    this.notes.push(message);
  }

  reset() {
    this.notes = [];
  }

}

module.exports = NotesModel;