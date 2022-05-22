import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  
  return (
    <aside className={`${isSidebarOpen ? 'sidebar sidebar--active' : 'sidebar'}`}>
      <button className ="sidebar__close-btn" onClick={closeSidebar}></button>
      <ul>
        <Link to="/space">
          <li className="sidebar__link">
            <b>00</b> home
          </li>
        </Link>
        <Link to="/destination">
          <li className="sidebar__link">
            <b>01</b> destination
          </li>
        </Link>
        <Link to="/crew">
          <li className="sidebar__link">
            <b>02</b> crew
          </li>
        </Link>
        <Link to="/technology">
          <li className="sidebar__link">
            <b>03</b> technology
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;