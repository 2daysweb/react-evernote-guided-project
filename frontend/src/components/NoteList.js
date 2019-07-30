import React, {Component} from 'react';
import NoteItem from './NoteItem';




class NoteList extends Component {

  // componentDidUpdate(prevProps){

  // }

  render(){
  return (
    <ul>
      {this.props.filteredNotes.map(note => <NoteItem 
                                              currNote={note}
                                              showNote={this.props.showNote}
                                  />)}
    </ul>
  );
}
}

export default NoteList;
