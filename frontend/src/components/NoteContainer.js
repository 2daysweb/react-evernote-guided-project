import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const BASE_URL = 'http://localhost:3000/'
//Static, only updates on "Component Did Mount" --- Avoids the problem of the new "allNotes" filtering  


class NoteContainer extends Component {

  constructor(){
    super()
    this.state={
      allNotes:[],
      // filteredNotes:[],
      currNote:{},
      currBody:"",
      currTitle:"",
      latestClick:"",
      searchText:""
    }
  }

  componentDidMount(){
    fetch(BASE_URL+'api/v1/jobs')
    .then(resp => resp.json())
    .then(notesArray=> {


                     this.setState({allNotes:notesArray})
                      // this.setState({filteredNotes:notesArray})
    })
            
  }


getFilteredNotes = () => {
  let allNotes = [...this.state.allNotes]
  console.log("ALL NOTES LOCAL VAR", allNotes)
  let newFilteredNotes = allNotes.filter(note => {
    return note.title.toLowerCase().includes(this.state.searchText.toLowerCase())
  })

  return newFilteredNotes

      //NEW FILTEREDNOTES ARRAY
      // this.setState({filteredNotes:[...newFilteredNotes]}, ()=>console.log("NEW!!! FILTERED NOTES STATE ARRAY", this.state.filteredNotes))
      
}



  handleChangeSearchText = (e) => {
    console.log("FILTERED NOTES STATE ARRAY", this.state.filteredNotes)
   
    //ALL NOTES ARRAY:
    // console.log("ALL NOTES STATE ARRAY", this.state.allNotes)
    this.setState({searchText:e.target.value}, this.getFilteredNotes)
    // debugger 
    //Update "all notes" to only return filtered notes based on Note Title 
  }

  //Refactor the SetState to be only one single object --- with KV pairs
  handleClickShowNote= (currNote) => {
    this.setState({currNote:currNote})
    this.setState({currBody:currNote.employer})
    this.setState({currTitle:currNote.title})
    this.setState({latestClick:"ShowNote"})
  }

  //Change latestClick and update state of 
  handleClickEditBtn = (e) => {  
    this.setState({changesCount:this.state.changesCount+=1})
    let startTitle = e.target.parentElement.children[0].innerText    
    let startBody = e.target.parentElement.children[1].innerText    
    //change latestClick to "edit"
    this.setState({latestClick: "EditNote"})
    this.setState({currTitle:startTitle})
    this.setState({currBody:startBody})
  }

  handleChangeInput= (e) => {
    let currTitle = e.target.value 
    this.setState({currTitle:currTitle})
  }

  handleChangeTextArea = (e) => {
    let currBody = e.target.value 
    this.setState({currBody:currBody})
  }

  handleClickSaveBtn = () => {

    let id = this.state.currNote.id
    console.log("Current Job ID", id) 
    debugger 
    //get new current title from editNote view 

    let newTitle=this.state.currTitle
    console.log("Current Title",newTitle) 
    //get new current body from editNote view 
  
    let newBody=this.state.currBody
    console.log("Current Body",newBody) 


    let currUserId = 16
    let newNote = {title:newTitle, employer:newBody, id:currUserId}
    let URL = BASE_URL+'api/v1/jobs/'+id
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

//First hit the debugger
//Set the CurrNote title and body to "defaults"
handleClickNewBtn = () => {
  debugger 
  this.setState({latestClick:""})
  
  //Create new empty note object --- hard-coded UserID = 2 
  let newNote = {title:"Deafult Title", body:"Deafult Body", user_id:2}
  let URL = BASE_URL+'api/v1/jobs'
  console.log(URL)

  return fetch(URL, {
    method:'POST',
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(newNote), // body data type must match "Content-Type" header
})
.then(response => response.json())
.then(noteObj => 
  {
    
    this.setState({allNotes: [...this.state.allNotes, noteObj]}) // parses JSON response into native JavaScript objects 

});
}

  handleClickCancelBtn = () => {
    //Return to content of curr note 
  }

  render() {
    return (
      <Fragment>
        <Search 
               latestClick={this.state.latestClick}
               handleChangeSearchText={this.handleChangeSearchText}
        />
        <div className='container'>
          <Sidebar 
                  allNotes={this.state.allNotes}
                  filteredNotes={this.getFilteredNotes()}
                  showNote={this.handleClickShowNote} 
                  currNote={this.state.currNote}
                  newNote={this.handleClickNewBtn}
                  latestClick={this.state.latestClick}      
           />
          <Content 
                  currNote={this.state.currNote}
                  editNote={this.handleClickEditBtn}
                  newNote={this.handleClickNewBtn}
                  handleChangeTextArea={this.handleChangeTextArea}
                  handleChangeInput={this.handleChangeInput}
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
