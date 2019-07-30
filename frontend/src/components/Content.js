import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/

class Content extends Component {

 latestClick = this.props.latestClick

  renderContent = (latestClick) => {
    console.log(latestClick)
    if (this.props.latestClick==="EditNote") {
      return <NoteEditor 
                        currNote={this.props.currNote}
                        currBody={this.props.currBody}
                        currTitle={this.props.currTitle} 
                        editNote={this.props.editNote}
                        handleChangeTextArea={this.props.handleChangeTextArea}
                        handleChangeInput={this.props.handleChangeInput}
                        saveNote={this.props.saveNote} 
                        latestClick={this.props.latestClick}    
            />;
    } else if (this.props.latestClick==="ShowNote") {
      return <NoteViewer 
                          currNote={this.props.currNote}
                          editNote={this.props.editNote}
                          showNote={this.props.showNote}
                          latestClick={this.props.latestClick}
             />;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
