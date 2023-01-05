import { Link } from "react-router-dom";
import React, { useState } from "react";
import AuthService from "../utils/auth";

export default function Navbar() {
  const nav = useState(false); // what is this for?

  // how to direct route to home page on logout
  const logout = (event) => {
    event.preventDefault();
    AuthService.logout();
  };
    return (

        <div className="flex container mx-auto content-center min-h-fit min-w-fit border-4  text-white bg-gray-600">

            <div className="flex container mx-auto content-center min-h-fit min-w-fit  text-white bg-gray-600">
                    
                <Link to="/" className="grid content-center text-5xl w-1/3 justify-center p-5 ">Track-It</Link>

                <ul className="grid content-center text-2xl w-1/3 justify-center p-5 ">
                    <div className="flex mx-auto space-x-20">
                        <Link to="/Tools">Tools</Link>
                        <Link to="/Technician">Technician</Link>    
                    </div>

                </ul>
                <ul className="grid content-center text-2xl w-1/3 justify-end p-5 ">
                    <div className="flex mx-auto space-x-20">
                        <Link to="/Login">Login</Link> 
                        <Link to="/Signup">Signup</Link>
                        <Link onClick={logout}>Logout</Link>                  
                    </div>
                </ul>
            </div>
        </div >   
    )    

}


