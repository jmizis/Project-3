import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState } from 'react'

export default function Navbar() {
const nav = useState(false);
    return (
        <div >
            <nav >
                <Link to="/" >Track It</Link>
                <ul>
                    <Link to="/Categories">Category</Link>
                    <CustomLink to="/Tools">Tools</CustomLink>
                    <CustomLink to="/Technician">Technician</CustomLink>
                    <CustomLink to="/Login">Login</CustomLink>                     
                </ul>
            </nav>       
        </div>
    )    
}

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
    
