// our home page or landing page. will need login page. 
// needs to direct to login page and once creds are evaluated, this can lead to inventory input or pages to view inventory class? need to lock down these details. 

import React from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";

// import Login from './Login';
// import Signup from './Signup';

export default function Home() {
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
   
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
  
    )
}
  return (
    
    <div>
      <div className="container">
      <h2>Welcome To TrackIt</h2>
        <div className="card">
          <div className="card-heading">
            TrackIt Login
          </div>
          <div className="card-body">
            Login to view your tools
          </div>
          <div className="button-container">
            <button type="submit" className="button">
              <Link to="./login">Login</Link>
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-heading">
            TrackIt Signup
          </div>
          <div className="card-body">
            Signup to create an account
          </div>
          <div className="button-container">
            <button type="submit" className="button">
              <Link to="./signup">Signup</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
