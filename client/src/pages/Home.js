// our home page or landing page. will need login page. 
// needs to direct to login page and once creds are evaluated, this can lead to inventory input or pages to view inventory class? need to lock down these details. 
import React from "react";
// import heroicon from "../assets/heroicon.jpg";

export default function Home() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
<div
          name="about"
          className=" from-gray-800 to-black text-white"
                    >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center wifull h-full">
              <div className="pb-8">
                  <p className="text-4xl font-bold inline from-gray-800 to-black text-white"></p>
              </div>
              <p className="text-xl mt-10">
                  My name is Chris Holtz, I was born and raised in Cincinnati Ohio.  I have been working in the computer indiustry since it's infincy.  My first computer ws a Radio Shack TRS80.  AFter years working on the developemnet of my own own software that we use to run of cabinetry and countertop business I have decided to educate myself in the field of Full Stack Development.
              </p>
              
              <br />

               <p className="text-xl mt-10">
                  For the past 5 years I have been working with programmers trying to get my vision of business software displayed in a program.  I have been the visionary and the engineer on the project.  Starting 6 months ago I began my journey as a Full Stack Developer and Software Engineer.
              </p>
          </div>        
      
    </div>
       
        {/* <div>
          <img src={heroicon} style={{ width: 400, height: 400, borderRadius: 100 / 2 }}
          
          />
          </div> */}
      </div>
    </section>
  );
}