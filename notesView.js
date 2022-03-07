class NotesView{
  constructor(notesModel){
    this.mainContainerEl = document.querySelector('#main-container');
    this.notesModel = notesModel;
  }

  displayNotes(){
    let notes = this.notesModel.getNotes();
    notes.forEach((note) => {
      let div = document.createElement('div')
      div.innerText = note;
      div.className = 'note';
      this.mainContainerEl.append(div);
    })
    
  }

}

module.exports = NotesView;
