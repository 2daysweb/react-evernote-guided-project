import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

const BASE_URL = "http://localhost:3000/";
//Static, only updates on "Component Did Mount" --- Avoids the problem of the new "allJobs" filtering

class JobContainer extends Component {
  constructor() {
    super();
    this.state = {
      allJobs: [],
      filteredJobs: [],
      currJob: {},
      currBody: "",
      currTitle: "",
      latestClick: "",
      searchText: ""
    };
  }

  componentDidMount() {
    fetch(BASE_URL + "api/v1/jobs")
      .then(resp => resp.json())
      .then(jobsArray => {
        this.setState({ allJobs: jobsArray });
        this.setState({filteredJobs:jobsArray})
        console.log(jobsArray)
      });
  }

  //Login Page --- Username input Password Input 
  handleChangeInput = e => {
    let currTitle = e.target.value;
    this.setState({ currTitle: currTitle });
  };

  handleChangeTextArea = e => {
    let currBody = e.target.value;
    this.setState({ currBody: currBody });
  };

  getFilteredJobs = () => {
    let allJobs = [...this.state.allJobs];
    let newFilteredJobs = allJobs.filter(job => {
      return job.title
        .toLowerCase()
        .includes(this.state.searchText.toLowerCase());
    });

    return newFilteredJobs;
  };

  handleChangeSearchText = e => {

    //ALL NOTES ARRAY:
    // console.log("ALL NOTES STATE ARRAY", this.state.allJobs)
    this.setState({ searchText: e.target.value }, this.getFilteredJobs);
    // debugger
    //Update "all jobs" to only return filtered jobs based on job Title
  };

  //Refactor the SetState to be only one single object --- with KV pairs
  handleClickShowJob = currJob => {
    this.setState({ currJob: currJob });
    this.setState({ currBody: currJob.body });
    this.setState({ currTitle: currJob.title });
    this.setState({ latestClick: "ShowJob" });
  };

  //Change latestClick and update state of
  handleClickEditBtn = e => {
    console.log(e)
    this.setState({ changesCount: (this.state.changesCount += 1) });
    let startTitle = e.target.parentElement.children[0].innerText;
    let startBody = e.target.parentElement.children[1].innerText;
    //change latestClick to "edit"
    this.setState({ latestClick: "EditJob" });
    this.setState({ currTitle: startTitle });
    this.setState({ currBody: startBody });
    }

  handleClickSaveBtn = currJob => {
    //get current id of current job 
    let id = currJob.id;
    let currUserId = currJob.user.id 
    console.log(id)
 
    //get new current title from editJob view
    let newTitle = this.state.currTitle 
    //get new current body from editJob view
    let newBody = this.state.currBody
    //create new job object with newTitle and newBody
    let newJob = { title: newTitle, body: newBody, user_id: currUserId };
    let URL = BASE_URL + "api/v1/jobs/" + id;
    console.log(URL);
    debugger 

    return fetch(URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newJob) // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(data => console.log(data)); // parses JSON response into native JavaScript objects
  };

  //First hit the debugger
  //Set the CurrJob title and body to "defaults"
  //create a new note from sidebar, NoteList component 
  handleClickNewBtn = () => {
    // debugger;
    this.setState({ latestClick: "" });

    //Create new empty job object --- hard-coded UserID = 2
    let newJob = { title: "Deafult Title", body: "Deafult Body", user_id: 5};
    let URL = BASE_URL + "api/v1/jobs";
    console.log("Is URL Printing", URL);

    return fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newJob) // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(jobObj => {
        console.log(jobObj);
        this.setState({allJobs: [...this.state.allJobs, jobObj]}) // parses JSON response into native JavaScript objects
      });
  };

  // - [ ] When in edit mode, also show a `Cancel` button which 
  // discards any changes and reverts back to displaying the note.
  handleClickCancelBtn = () => {
    console.log("In Cancel Btn!!")
    // this.setState({ currJob: currJob });
    // this.setState({ currBody: currJob.body });
    // this.setState({ currTitle: currJob.title });
    // this.setState({ latestClick: "ShowJob" });
  };

  render() {
    return (
      <Fragment>
        <Search
          latestClick={this.state.latestClick}
          handleChangeSearchText={this.handleChangeSearchText}
        />
        <div className="container">
          <Sidebar
            allJobs={this.state.allJobs}
            filteredJobs={this.getFilteredJobs()}
            showJob={this.handleClickShowJob}
            currJob={this.state.currJob}
            newJob={this.handleClickNewBtn}
            latestClick={this.state.latestClick}
          />
          <Content
            currJob={this.state.currJob}
            editJob={this.handleClickEditBtn}
            cancelJob={this.handleClickCancelBtn}
            newJob={this.handleClickNewBtn}
            handleChangeTextArea={this.handleChangeTextArea}
            handleChangeInput={this.handleChangeInput}
            showJob={this.handleClickShowJob}
            saveJob={this.handleClickSaveBtn}
            currTitle={this.state.currTitle}
            currBody={this.state.currBody}
            latestClick={this.state.latestClick}
          />
        </div>
      </Fragment>
    );
  }
}

export default JobContainer;

// import React, { Component, Fragment } from 'react';
// import Search from './Search';
// import Sidebar from './Sidebar';
// import Content from './Content';

// const BASE_URL = 'http://localhost:3000/'
// //Static, only updates on "Component Did Mount" --- Avoids the problem of the new "allJobs" filtering

// class JobContainer extends Component {
//   constructor() {
//     super();
//     this.state = {
//       allJobs: [],
//       filteredJobs: [],
//       currJob: {},
//       currBody: "",
//       currTitle: "",
//       latestClick: "",
//       searchText: ""
//     };
//   }

//   componentDidMount() {
//     fetch(BASE_URL + "api/v1/jobs")
//       .then(resp => resp.json())
//       .then(jobsArray => {
//         console.log(jobsArray)
//         //  this.setState({allJobs:jobsArray})
//         this.setState({ filteredJobs: jobsArray });
//       })
//       .then(console.log(this.state.filteredJobs));
//   }

//   getFilteredJobs = () => {
//     // let allJobs = [...this.state.allJobs]
//     console.log("ALL NOTES LOCAL VAR", this.state.allJobs);
//     let newFilteredJobs = this.state.filteredJobs.filter(job => {
//       return job.title
//         .toLowerCase()
//         .includes(this.state.searchText.toLowerCase());
//     });

//     console.log(newFilteredJobs);
//     return newFilteredJobs;

//     //  this.setState({filteredJobs:[...newFilteredJobs]}, ()=>console.log("NEW!!! FILTERED NOTES STATE ARRAY", this.state.filteredJobs))
//   };

//   handleChangeSearchText = e => {
//     console.log("FILTERED NOTES STATE ARRAY", this.state.filteredJobs);

//     //ALL NOTES ARRAY:
//     // console.log("ALL NOTES STATE ARRAY", this.state.allJobs)
//     this.setState({ searchText: e.target.value }, this.getFilteredJobs());
//     // debugger
//     //Update "all jobs" to only return filtered jobs based on job Title
//   };

//   //Refactor the SetState to be only one single object --- with KV pairs
//   handleClickShowJob = currJob => {
//     this.setState({ currJob: currJob });
//     this.setState({ currBody: currJob.employer });
//     this.setState({ currTitle: currJob.title });
//     this.setState({ latestClick: "ShowJob" });
//   };

//   //Change latestClick and update state of
//   handleClickEditBtn = e => {
//     this.setState({ changesCount: (this.state.changesCount += 1) });
//     let startTitle = e.target.parentElement.children[0].innerText;
//     let startBody = e.target.parentElement.children[1].innerText;
//     //change latestClick to "edit"
//     this.setState({ latestClick: "EditJob" });
//     this.setState({ currTitle: startTitle });
//     this.setState({ currBody: startBody });
//   };

//   handleChangeInput = e => {
//     let currTitle = e.target.value;
//     this.setState({ currTitle: currTitle });
//   };

//   handleChangeTextArea = e => {
//     let currBody = e.target.value;
//     this.setState({ currBody: currBody });
//   };

//   handleClickSaveBtn = () => {
//     let id = this.state.currJob.id;
//     console.log("Current Job ID", id);
//     debugger;
//     //get new current title from editJob view

//     let newTitle = this.state.currTitle;
//     console.log("Current Title", newTitle);
//     //get new current body from editJob view

//     let newBody = this.state.currBody;
//     console.log("Current Body", newBody);

//     let currUserId = 16;
//     let newJob = { title: newTitle, employer: newBody, id: currUserId };
//     let URL = BASE_URL + "api/v1/jobs/" + id;
//     console.log(URL);

//     return fetch(URL, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify(newJob) // body data type must match "Content-Type" header
//     })
//       .then(response => response.json())
//       .then(data => console.log(data)); // parses JSON response into native JavaScript objects
//   };

//   //First hit the debugger
//   //Set the CurrJob title and body to "defaults"
//   handleClickNewBtn = () => {
//     debugger;
//     this.setState({ latestClick: "" });

//     //Create new empty job object --- hard-coded UserID = 2
//     let newJob = { title: "Deafult Title", body: "Deafult Body", user_id: 2 };
//     let URL = BASE_URL + "api/v1/jobs";
//     console.log(URL);

//     return fetch(URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify(newJob) // body data type must match "Content-Type" header
//     })
//       .then(response => response.json())
//       .then(jobObj => {
//         this.setState({ allJobs: [...this.state.allJobs, jobObj] }); // parses JSON response into native JavaScript objects
//       });
//   };

//   handleClickCancelBtn = () => {
//     //Return to content of curr job
//   };

//   render() {
//     return (
//       <Fragment>
//         <Search
//           latestClick={this.state.latestClick}
//           handleChangeSearchText={this.handleChangeSearchText}
//         />
//         <div className="container">
//           <Sidebar
//             allJobs={this.state.allJobs}
//             filteredJobs={this.getFilteredJobs()}
//             showJob={this.handleClickShowJob}
//             currJob={this.state.currJob}
//             newJob={this.handleClickNewBtn}
//             latestClick={this.state.latestClick}
//           />
//           <Content
//             currJob={this.state.currJob}
//             editJob={this.handleClickEditBtn}
//             newJob={this.handleClickNewBtn}
//             handleChangeTextArea={this.handleChangeTextArea}
//             handleChangeInput={this.handleChangeInput}
//             showJob={this.handleClickShowJob}
//             saveJob={this.handleClickSaveBtn}
//             currTitle={this.state.currTitle}
//             currBody={this.state.currBody}
//             latestClick={this.state.latestClick}
//           />
//         </div>
//       </Fragment>
//     );
//   }
// }

// export default JobContainer;
