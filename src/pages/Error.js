import React from 'react';
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="destination">
      <div className="flexbox">
        <div className="flex-item">
          <h5>oh no, looks like that page is lost in space</h5>
        </div>
        <div className="flex-item">
          <Link to="/">
            <span>back home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error