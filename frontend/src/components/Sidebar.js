import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList  
                 allNotes={this.props.allNotes}
                 filteredNotes={this.props.filteredNotes}
                 showNote={this.props.showNote}
                 editNote={this.props.editNote}
                 currNote={this.props.currNote}

        />
        <button onClick={this.props.newNote}>New</button>
      </div>
    );
  }
}

export default Sidebar;
