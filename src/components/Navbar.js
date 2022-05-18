import React, {useState} from 'react';
import { Link } from "react-router-dom";

const Navbar = ({openSidebar}) => {

  // const [display, setDisplay] = useState({
  //   pages: [{ a: 0 }, { b: 1 }, { c: 2 }, { d: 3 }],
  //   activePage: pages[0]
  // });

  // const togglePage = (index) => {
  //   setDisplay({ ...display, activePage: display.pages[index] });
  // }

  // const toggleActive = (index) => {
  //   if ( display.pages[index] === display.activePage ) {
  //     return "navbar__link navbar__link--active";
  //   } else {
  //     return "navbar__link";
  //   }
  // }

  return (
    <>
      <button className="sidebar-btn" onClick={openSidebar}></button>

      <ul className="navbar">
        {/* {display.pages.map((page, index) => {
          return (
            <div key={index} className={toggleActive(index)} onClick={() => {togglePage(index)}}>link</div>
          )
          return (
            <Link to={link}>
              <li
                key={index} className={toggleActive(index)} onClick={() => {togglePage(index)}}
              >
                <b>{`0${index}`}</b> {name}
              </li>
            </Link>
          );
        })} */}

        <Link to="/">
          <li className="navbar__link">
            <b>00</b> home
          </li>
        </Link>
        <Link to="/destination">
          <li className="navbar__link">
            <b>01</b> destination
          </li>
        </Link>
        <Link to="/crew">
          <li className="navbar__link">
            <b>02</b> crew
          </li>
        </Link>
        <Link to="/technology">
          <li className="navbar__link">
            <b>03</b> technology
          </li>
        </Link>
      </ul>
    </>
  );
}

export default Navbar;