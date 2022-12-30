import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState } from 'react'


export default function Navbar() {
const [nav, setNav] = useState(false);
    return (
        <div className="flex justify-between items-center w-full h-20 align-middle text-white px-8
         pt-4 bg-black">

            <nav className="flex justify-between items-center w-full h-20">
                
            
            <Link to="/" className="text-2xl flex justify-between items-center w-full h-10 align-middle text-white px-4 pt-4 bg-black ">Track It</Link>
            <ul className="flex justify-between items-center w-full h-10 align-middle text-white px-4 pt-4 bg-black ">
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
    
