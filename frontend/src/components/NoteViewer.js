import React, { Fragment } from 'react';

const NoteViewer = (props) => {

  // let editNote= (currNote) => {
  //   debugger 
  //   props.editNote(currNote)
  // }

  return (
    <Fragment>
      <h2>{props.currNote.title}</h2>
      <p>{props.currNote.body}</p>
      <button onClick={props.editNote}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
