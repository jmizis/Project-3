import React from 'react';
import Navbar from '../Navbar'



const Header = () => {
  return (
      <header >
      < Navbar />
      </header>
    
  )
}

export default Header

// import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';

// const Header = () => {
//     const logout = (event) => {
//         event.preventDefault();
//         Auth.logout()
//     };
//     const login = () => {
//         Auth.login();
//     }

// }