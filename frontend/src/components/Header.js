import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-item"><Link to="/home"><button>Home</button></Link></li>
        <li className="nav-item"><Link to='/App'><button>App</button></Link></li>
        <li className="nav-item"><Link to='/Login'><button>Login</button></Link></li>
        <li className="nav-item"><Link to='/SignUp'><button>Sign Up</button></Link></li>
      </ul>
    </div>
  );
}

export default Header;
