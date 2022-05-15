import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <aside className={`${isSidebarOpen ? 'sidebar sidebar--active' : 'sidebar'}`}>
      <button onClick={closeSidebar}>close</button>
      <ul>
        <Link to="/">
          <li className="navbar__link">
            <b className="navbar__n">01</b> home
          </li>
        </Link>
        <Link to="/destination">
          <li className="navbar__link">
            <b className="navbar__n">02</b> destination
          </li>
        </Link>
        <Link to="/crew">
          <li className="navbar__link">
            <b className="navbar__n">03</b> crew
          </li>
        </Link>
        <Link to="/technology">
          <li className="navbar__link">
            <b className="navbar__n">04</b> technology
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;