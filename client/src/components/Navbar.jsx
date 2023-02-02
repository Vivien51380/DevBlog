import React from 'react';
import { Link } from 'react-router-dom';
import Logo1 from "../img/Logo1.png";

function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo1} alt="" />
        </div>
        <div className="links">
          <Link to="/?cat=web" className='link'>
            <h6>WEB</h6>
          </Link>
          <Link to="/?cat=web" className='link'>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link to="/?cat=web" className='link'>
            <h6>ACTU</h6>
          </Link>
          <span>Vivien</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
