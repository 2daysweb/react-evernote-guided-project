import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Login= (props) => {
  return (
    <div className="Login">
        
        <Form onSubmit={props.handleSubmitCredentials}> 
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text onChange={(e)=>{props.handleChangeInputUsername(e)}}className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      
      </div>
    );
  }
 


export default Login;
// {/* <li className="nav-item"><Link to='/SignUp'><button>Sign Up</button></Link></li> */}

// <h1><span>Username</span><span>Password</span></h1>
// <div className="filter">
  
//   <input onChange={(e)=> props.handleChangeInputUsername(e)}
 
//     type="text"
//     placeholder="Username"
//   />
//     <input onChange={(e)=> props.handleChangeInputPassword(e)} 
//     type="text"
//     placeholder="Password"
//   />
// </div>