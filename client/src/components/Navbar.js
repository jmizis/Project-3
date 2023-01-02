import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState } from 'react'

export default function Navbar() {
const [nav, setNav] = useState(false);
    return (
        <div>
            <nav >
                <Link to="../" >Track It</Link>
                <ul>
                    <CustomLink to='/category'>Category</CustomLink>
                    <CustomLink to='/tools'>Tools</CustomLink>
                    <CustomLink to='/technician'>Technician</CustomLink>
                    <CustomLink to='/login'>Login</CustomLink>                     
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
    
