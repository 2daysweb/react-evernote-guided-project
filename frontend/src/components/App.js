import React, { Component } from "react";
import Header from "./Header";
import MainApp from "./JobContainer";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";

class App extends Component {

  constructor(){
    super()
    this.state = {
      currEmail:"",
      currPassword:""
    }
  }

  handleSubmitCredentials = e => {
    debugger 
    let email = e.target.children[0].children[1].value 

    let password = e.target.children[1].children[1].value 


    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
          bio: "Boring",
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Guy_Fieri_at_Guantanamo_2.jpg'
        }
      })
    })
      .then(r => r.json())
      .then(data => console.log(data))
  }
  handleChangeInputEmail = (e) => {this.setState({currEmail:e.target.value});console.log("Hitting INPUT Email")};

  handleChangeInputPassword = (e) => {console.log("Hitting INPUT PW")};

  handleChangeNewEmail = (e) => {console.log("Hitting INPUT Email")};

  handleChangeInputPassword = (e) => {console.log("Hitting INPUT PW")};

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/app" component={MainApp} />
          <Route
            exact path="/login"
            render={(props) => <Login {...props}  
            handleChangeInputEmail={this.handleChangeInputEmail}
            handleChangeInputPassword={this.handleChangeInputEmail}
            handleSubmitCredentials={this.handleSubmitCredentials} />}
           
          />
          <Route
            exact
            path="/signUp"
            component={SignUp}
            handleChangeNewEmail={this.handleChangeNewEmail}
            handleChangeNewPassword={this.handleChangeNewEmail}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
