import React, { Component } from 'react';

class NoteEditor extends Component {
  render() {
    return (
      <form className="note-editor">
        <input type="text" onChange={(e)=>this.props.handleChangeInput(e)} name="title" value={this.props.currTitle} />
        <textarea onChange={(e) => this.props.handleChangeTextArea(e)} name="body" value={this.props.currBody}/>
        <div className="button-row">
          <input className="button" onClick={(e)=>{this.props.saveNote(e)}}type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
