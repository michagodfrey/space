import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({openSidebar}) => {
  return (
    <>
      <button className="sidebar-btn" onClick={openSidebar}></button>
      <ul className="navbar">
        <Link to="/">
          <li className="navbar__link">
            <b>01</b> home
          </li>
        </Link>
        <Link to="/destination">
          <li className="navbar__link">
            <b>02</b> destination
          </li>
        </Link>
        <Link to="/crew">
          <li className="navbar__link">
            <b>03</b> crew
          </li>
        </Link>
        <Link to="/technology">
          <li className="navbar__link">
            <b>04</b> technology
          </li>
        </Link>
      </ul>
    </>
  );
}

export default Navbar;