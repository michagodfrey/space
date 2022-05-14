import React from 'react';
import Navbar from "./Navbar";
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <div className="header__logo"></div>
      </Link>
      <div className='header__line'></div>
      <Navbar />
      {/* <Sidebar /> */}
    </header>
  );
}

export default Header