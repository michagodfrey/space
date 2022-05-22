import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = ({openSidebar}) => {

  return (
    <>
      <button className="sidebar-btn" onClick={openSidebar}></button>
      <ul className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
        >
          <li>
            <b>00</b> home
          </li>
        </NavLink>
        <NavLink
          to="/destination"
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
        >
          <li>
            <b>01</b> destination
          </li>
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
        >
          <li>
            <b>02</b> crew
          </li>
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) =>
            isActive ? "navbar__link--active" : "navbar__link"
          }
        >
          <li>
            <b>03</b> technology
          </li>
        </NavLink>
      </ul>
    </>
  );
}

export default Navbar;