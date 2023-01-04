// our home page or landing page. will need login page. 
// needs to direct to login page and once creds are evaluated, this can lead to inventory input or pages to view inventory class? need to lock down these details. 

import React from "react";
// import {useMatch, useResolvedPath} from "react-router-dom";

// import Login from './Login';
// import Signup from './Signup';

export default function Home() {
  // function CustomLink({ to, children, ...props }) {
  //   const resolvedPath = useResolvedPath(to)
  //   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
   
    return (
      <div className="grid container mx-auto content-center min-h-fit min-w-fit border-4 text-white bg-gray-600">
        <div className="h-16 grid content-center justify-center p-20">
           <h2 className="h-16 grid content-center justify-center text-7xl">Welcome To TrackIt</h2>
        </div>
         <div className="flex container mx-auto justify-center min-h-fit min-w-fit  text-white bg-gray-600">
           <h2>
             This is a paragraph about us and the software.
             To make the home page look good!
             add some images etc.
           </h2>
         </div>
    </div>
       
  );
};
