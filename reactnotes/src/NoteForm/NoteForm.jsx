import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  // set the new node content
  // value from input box
  handleUserInput(e){
    console.log(this)
    this.setState({
      newNoteContent: e.target.value, //value of text import
    })
  }

writeNote(){
  //Call method
}

  render() {
    return(
      <div className="formWrapper">
        <input class="noteInput" placeholder="Write a new note" value={this.state.newNoteContent} onChange={this.handleUserInput} />
        <button class="noteButton" onClick={this.writeNote}>Add note</button>
      </div>
    )
  }
}

export default NoteForm;
