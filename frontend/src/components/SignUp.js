import React, {Fragment } from 'react';

const SignUp = (props) => {

    return (
        <Fragment>
            <h1><span>Enter New Username</span><span>Enter New Password</span></h1>
        <div className="filter">
          <h1></h1>
          <input onChange={(e)=> props.handleChangeNewUsername(e)}
         
            type="text"
            placeholder="New Username"
          />
            <input onChange={(e)=> props.handleChangeNewPassword(e)}
         
            type="text"
            placeholder="New Password"
          />
        
        </div>
        </Fragment>  
      );
    }

export default SignUp;
