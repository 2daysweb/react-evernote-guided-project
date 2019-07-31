import React, { Component } from 'react';
import Header from './Header';
import MainApp from './NoteContainer';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import { Route, Switch } from "react-router-dom";

class App extends Component {

handleChangeInputUsername = () => {

}

handleChangeInputPassword = () => {

}

handleChangeNewUsername = () => {

}

handleChangeInputPassword= () => {

}

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
        <Route exact path="/home" 
        component={Home}/>
        <Route exact path="/app" component={MainApp}/>
        <Route exact path="/login" component={Login}
        handleChangeInputUsername={this.handleChangeInputUsername}
        handleChangeInputUsername={this.handleChangeInputUsername}/>
        <Route exact path="/signUp" component={SignUp}
          handleChangeNewUsername={this.handleChangeNewUsername}
          handleChangeNewUsername={this.handleChangeNewUsername}/>
        </Switch>
      </div>
    );
  }
}

export default App;
{/* <NoteContainer /> */}
{/* <Route path='/' component={NoteViewer} /> */}
{/* <NoteContainer/> */}