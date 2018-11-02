import React, { Component } from 'react';
import logo from './logo.svg';
import Note from './Note/Note';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    // We'are setup here React states of note components
    this.state = {
      notes: [
        {id: 1, content: "noteContent 1"},
        {id: 2, content: "noteContent 1"}
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
          <Note noteContent={} noteId={} key={}  />
        </div>
        <div className="notesFooter">
          Footer will go here
        </div>
      </div>
    );
  }
}

export default App;
