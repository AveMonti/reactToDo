import React, { Component } from 'react';
import logo from './logo.svg';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    // We'are setup here React states of note components
    this.state = {
      notes: [
        {id: 1, noteContent: "noteContent 1"},
        {id: 2, noteContent: "noteContent 1"}
      ],
    }
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
          <NoteForm />
        </div>
      </div>
    );
  }
}

export default App;
