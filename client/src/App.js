import React from 'react';
import Home from './pages/Home';
import Technician from "./pages/Technician";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import Tools from "./pages/Tools";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
   
  return (
    <>
      <Header />
    
      <div className='bg-gradient-to-b from-black to-gray-800 md:h-screen text-white'>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Technician" element={<Technician />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Tools" element={<Tools />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
    
  )
}
  
 
export default App






// import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom'; 
// import Home from './pages/Home'

// import Header from './components/Header';

// function App() {
//   return (
//     <Router>
//       <Header />  
//       <Home />     
    
//     </Router>
         
//   );
// }

// export default App;

