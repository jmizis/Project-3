import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="flex container mx-auto content-center min-h-fit min-w-fit  text-white bg-gray-600">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
