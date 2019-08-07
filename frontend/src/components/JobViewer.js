import React, { Fragment } from 'react';

const JobViewer = (props) => {

  return (
    <Fragment>
      <h2>{props.currJob.title}</h2>
      <p>{props.currJob.employer}</p>
      <button onClick={props.editJob}>Edit</button>
      <button onClick={props.cancelJob}>Cancel</button>
    </Fragment>
  );
}

export default JobViewer;
