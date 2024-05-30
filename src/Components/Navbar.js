
import logo from '../images/logo.png'
import "./Navbar.css"
import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
const Navbar = () => {
    const[hamburger,showHamburger]=useState(false)
  return (
    <nav data-aos="fade-down"
    data-aos-duration="1000">
       <img src={logo} alt="logo" />
      <div className="menu" onClick={()=>{showHamburger(!hamburger)}}>
      <span></span>
      <span></span>
      <span></span></div>
      <ul className={hamburger?"open":""}>
        <li>
          <NavLink className="nav_items" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_items" to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_items" to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_items" to="/contact">
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
