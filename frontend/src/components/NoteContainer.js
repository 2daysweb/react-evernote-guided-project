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

    //change latestClick to "edit"
    this.setState({latestClick: "EditNote"})
    this.setState({currTitle:startTitle})

    this.setState({currBody:startBody})

    }

    else {
      debugger 
    let currTitle = e.target.parentElement.children[0].value 
    let currBody = e.target.value 
    this.setState({currBody:currBody})
    this.setState({currTitle:currTitle})
    }

  }

  handleClickSaveBtn = (currNote) => {
  
    let id = this.state.currNote.id 
    //get new current title from editNote view 
    let newTitle=currNote.target.parentElement.parentElement[0].value 
    //get new current body from editNote view 
    let newBody=currNote.target.parentElement.parentElement[1].value 
    let currUserId = 2
    let newNote = {title:newTitle, body:newBody, user_id:currUserId}
    let URL = BASE_URL+'api/v1/notes/'+id
    console.log(URL)
   

    return fetch(URL, {
      method:'PATCH',
      headers:{
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(newNote), // body data type must match "Content-Type" header
  })
  .then(response => response.json())
  .then(data => console.log(data)); // parses JSON response into native JavaScript objects 
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
                  saveNote={this.handleClickSaveBtn}
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
