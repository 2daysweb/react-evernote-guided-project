import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.allNotes.map(note => <NoteItem 
                                              currNote={note}
                                              showNote={props.showNote}
                                  />)}
    </ul>
  );
}

export default NoteList;
