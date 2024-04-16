import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="Navigation" ref={menuRef}>
      <div>
        <Link to={"/"}>
          <img className="logo" src="/Assets/pcmc.png" alt="asd" />
        </Link>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link className="nav" to={"/"} onClick={handleLinkClick}>
          Home
        </Link>
        <div className="dropdown" onClick={toggleDropdown}>
          <button className={`dropbtn ${isDropdownOpen ? "active" : ""}`}>
            Plans &#9656;
          </button>
          <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
            <button>
              <Link to={"/web-development"} onClick={handleLinkClick}>Web Development</Link>
            </button>
            <button>
              <Link to={"/internet-isp"} onClick={handleLinkClick}>Internet (ISP)</Link>
            </button>
            <button>
              <Link to={"/internet-dsl"} onClick={handleLinkClick}>Internet (DSL)</Link>
            </button>
            <button>
              <Link to={"/4g-internet"} onClick={handleLinkClick}>4G Internet</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "animate" : ""}`}></div>
        <div className={`bar ${isOpen ? "animate" : ""}`}></div>
        <div className={`bar ${isOpen ? "animate" : ""}`}></div>
      </div>
    </nav>
  );
}

export default Nav;
