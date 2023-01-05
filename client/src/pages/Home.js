import React from "react";
import Image from "../images/image.gif"


export default function Home() {

  // function CustomLink({ to, children, ...props }) {
  //   const resolvedPath = useResolvedPath(to)
  //   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
   
  
    return (
      <div className="grid container mx-auto content-center min-h-fit min-w-fit border-4 text-white bg-gray-600">
        <div className="h-16 grid content-center justify-center p-20">
          <h2 className="h-16 grid content-center justify-center text-7xl">Welcome To TrackIt</h2>
        </div>
        <div className="grid container mx-auto content-center text-white bg-gray-600">
            <img className="grid container mx-auto content-center h-80 w-80 p-5" src={Image} alt="" />
        
          <div className="grid container mx-auto content-center justify-center text-white bg-gray-600">
            <h2 className="grid container content-center justify-center p-5 text-4xl text-white bg-gray-600">
              Need to keep track of you Tools?           
            </h2>
            <h2 className="grid container content-center justify-center p-5 text-4xl text-white bg-gray-600">
              Track-it is the App for you!           
            </h2>
             <h2 className="grid container content-center justify-center pb-5 text-white bg-gray-600">
              Login or Signup to continue           
            </h2>
          </div>
         </div>
      </div>
  );
}
