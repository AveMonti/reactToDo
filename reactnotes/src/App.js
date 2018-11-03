import React, { Component } from 'react';
import logo from './logo.svg';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.addNote = this.addNote.bind(this);
    // We'are setup here React states of note components
    this.state = {
      notes: [
        {id: 1, noteContent: "noteContent 1"},
        {id: 2, noteContent: "noteContent 1"}
      ],
    }
  }

  addNote(note){
      // push note on the notes array
      const previusNotes = this.state.notes;
      previusNotes.push({
          id: previusNotes.length + 1,
          noteContent: note
      });

      this.setState({
           notes: previusNotes
      });

  }

  render() {
    return (
      <div className="notesWraper">
        <div className="notesHeader">
            <div className="heading">React & and firebase ToDo list </div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                  <Note noteContent={note.noteContent} noteId={note.id} key={note.id}  />
              )
            })
          }
        </div>
        <div className="notesFooter">
          <NoteForm addNote={this.addNote}/>
        </div>
      </div>
    );
  }
}

export default App;
