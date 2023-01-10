import React from "react";

export default function Home() {
  // block of empty space should be reduced
  return (
      <div className="container mx-auto content-center min-h-fit min-w-fit border-4 text-white bg-gray-600">
   


      <ul className="container mx-auto grid content-center text-2xl w-3/5 justify-center p-5 ">
        <div className="flex mx-auto space-x-20">
          <a
            href="https://www.linkedin.com/in/lindsay-allen-3545b2243"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lindsay Allen LinkedIn
          </a>
          <a
            href="https://www.linkedin.com/in/chris-holtz-7154ba33"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chris Holtz LinkedIn
          </a>
          <a
            href="https://www.linkedin.com/in/john-mizis-474222245/"
            target="_blank"
            rel="noopener noreferrer"
          >
            John Mizis LinkedIn
          </a>
        </div>
      </ul>
    </div>
  );
}
