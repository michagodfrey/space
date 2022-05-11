import React from 'react';
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar--mobile"></div>
      <ul className="navbar">
        {/* <Link to="/home"> */}
          <li>Home</li>
        {/* </Link> */}
        {/* <Link to="/destination"> */}
          <li>Destination</li>
        {/* </Link> */}
        {/* <Link to="/crew"> */}
          <li>Crew</li>
        {/* </Link>
        <Link to="/pests"> */}
          <li>Technology</li>
        {/* </Link> */}
      </ul>
    </>
  );
}

export default Navbar;