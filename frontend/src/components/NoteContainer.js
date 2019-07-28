import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const BASE_URL = 'http://localhost:3000/'

class NoteContainer extends Component {

  constructor(){
    super()
    this.state={
      allNotes:[],
      currNote:{},
      currBody:"",
      currTitle:"",
      latestClick:"",
      changesCount:0
    }
  }

  componentDidMount(){
    fetch(BASE_URL+'api/v1/notes')
    .then(resp => resp.json())
    .then(notesArray=> this.setState({allNotes:notesArray}))
  }

  handleClickShowNote= (currNote) => {
    this.setState({currNote:currNote})
    this.setState({currBody:currNote.body})
    this.setState({currTitle:currNote.title})
    this.setState({latestClick:"ShowNote"})
  }

  //Change latestClick and update state of 
  handleClickEditBtn = (e) => {
    

    if (this.state.changesCount === 0 ){
      
    this.setState({changesCount:this.state.changesCount+=1})
    let startTitle = e.target.parentElement.children[0].innerText    
    let startBody = e.target.parentElement.children[1].innerText    
    debugger 
    //change latestClick to "edit"
    this.setState({latestClick: "EditNote"})
    this.setState({currTitle:startTitle})
    debugger 
    this.setState({currBody:startBody})

    }

    else {
    
    let currTitle = ""
    let currBody = e.target.value 
    this.setState({currBody:currBody})
    }

  }

  handleClickSaveBtn = (currNote) => {
    let id = currNote.id 
    //find the note by ID
    //find the PATCH syntax and execute it 
    this.setState({currNote:currNote})
    this.setState({latestClick:"SaveNote"})
    //Make patch request to update the record specifed 
  }

  handleClickCancelBtn = () => {
    //Return to content of curr note 
  }

  render() {
    return (
      <Fragment>
        <Search 
               latestClick={this.state.latestClick}
        />
        <div className='container'>
          <Sidebar 
                  allNotes={this.state.allNotes}
                  showNote={this.handleClickShowNote} 
                  currNote={this.state.currNote}
                  latestClick={this.state.latestClick}      
           />
          <Content 
                  currNote={this.state.currNote}
                  editNote={this.handleClickEditBtn}
                  showNote={this.handleClickShowNote}
                  currTitle={this.state.currTitle}
                  currBody={this.state.currBody}
                  latestClick={this.state.latestClick}

          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
