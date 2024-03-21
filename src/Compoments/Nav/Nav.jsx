import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className='Navigation'>
      <div>
        <Link to={"/"}>
          <img className='logo' src="/Assets/pcmc.png" alt="asd" />
        </Link>
      </div>
      <div>
      <div className="dropdown">
        <button className="dropbtn">Plans &#9662;</button>
        <div className="dropdown-content">
          <Link to={"/web-development"}>Web Development</Link>
          <Link to={"/internet-isp"}>Internet (ISP)</Link>
          <Link to={"/internet-dsl"}>Internet (DSL)</Link>
        </div>
      </div>

      <Link className='nav' to={"/shop"}>Shop</Link>
      <Link className='nav' to={"/about-us"}>About Us</Link>
      <Link className='nav' to={"/contact-us"}>Contact Us</Link>
    </div>
      </div>
      
  );
}

export default Nav;
