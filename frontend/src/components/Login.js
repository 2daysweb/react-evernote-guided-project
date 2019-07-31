import React, {Fragment} from 'react';

const Login= (props) => {
  return (
    <Fragment>
        <h1><span>Username</span><span>Password</span></h1>
    <div className="filter">
      <h1></h1>
      <input onChange={(e)=> props.handleChangeInputUsername(e)}
     
        type="text"
        placeholder="Username"
      />
        <input onChange={(e)=> props.handleChangeInputPassword(e)}
     
        type="text"
        placeholder="Password"
      />
    </div>
 

    </Fragment>  
  );
}

export default Login;
{/* <li className="nav-item"><Link to='/SignUp'><button>Sign Up</button></Link></li> */}