import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header>
      <Link to="/">
        <div className="header__logo"></div>
      </Link>
      <Navbar openSidebar={openSidebar} />
      <Sidebar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen}  />
    </header>
  );
}

export default Header