// our home page or landing page. will need login page. 
// needs to direct to login page and once creds are evaluated, this can lead to inventory input or pages to view inventory class? need to lock down these details. 

import React from "react";
import {useMatch, useResolvedPath} from "react-router-dom";

// import Login from './Login';
// import Signup from './Signup';

export default function Home() {
  // function CustomLink({ to, children, ...props }) {
  //   const resolvedPath = useResolvedPath(to)
  //   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
   
    return (
    <div className="container mx-auto content-center min-h-fit min-w-fit  text-white bg-gray-600">
        <div className="h-16 grid content-center justify-center p-20">
           <h2 className="h-16 grid content-center justify-center text-7xl">Welcome To TrackIt</h2>
        </div>
         <div className="container mx-auto content-center min-h-fit min-w-fit  text-white bg-gray-600">
           <h2>
             This is a paragraph about us and the software.
             To make the home page look good!
             add some images etc.
           </h2>
         </div>
    </div>
       
  );
};







//         <li className={isActive ? "active" : ""}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
  
//     )
// }
//   return (
    
//     <div className="container">
//       <div className="card-container">
//       <h2>Welcome To TrackIt</h2>
//         <div className="card">
//           <div className="card-heading">
//             TrackIt Login
//           </div>
//           <div className="card-body">
//             Login to view your tools
//           </div>
//           <div className="button-container">
//             <button type="submit" className="button">
//               <Link to="./login">Login</Link>
//             </button>
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-heading">
//             TrackIt Signup
//           </div>
//           <div className="card-body">
//             Signup to create an account
//           </div>
//           <div className="button-container">
//             <button type="submit" className="button">
//               <Link to="./signup">Signup</Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
