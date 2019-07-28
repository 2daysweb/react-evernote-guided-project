import React, { Component } from 'react';

class NoteEditor extends Component {
  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" value={this.props.currTitle} />
        <textarea onChange={(e) => this.props.editNote(e)} name="body" value={this.props.currBody}/>
        <div className="button-row">
          <input className="button" onClick={()=>{this.props.saveNote}}type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
