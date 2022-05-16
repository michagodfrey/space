import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    console.log('open')
    setIsSidebarOpen(true);
    console.log(isSidebarOpen)
  };

  const closeSidebar = () => {
    console.log("close");
    setIsSidebarOpen(false);
    console.log(isSidebarOpen)
  };

  return (
    <header>
      <Link to="/">
        <div className="header__logo"></div>
      </Link>
      <div className="header__line"></div>
      <Navbar openSidebar={openSidebar} />
      <Sidebar closeSidebar={(isSidebarOpen, closeSidebar)} />
    </header>
  );
}

export default Header