import React, { Fragment } from 'react';

const NoteViewer = (props) => {

  return (
    <Fragment>
      <h2>{props.currNote.title}</h2>
      <p>{props.currNote.employer}</p>
      <button onClick={props.editNote}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
