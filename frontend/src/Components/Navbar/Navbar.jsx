import React, { useState } from 'react';

import './Navbar.css';
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu toggle
  


  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <div className="Navbar">
      <img src={logo} alt="Logo" className="logo" />
      
      {/* Mobile menu button (hamburger) */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        {/* Close button (cross) */}
        <div className="close-btn" onClick={toggleMobileMenu}>
          &times;
        </div>
        <ul className="navbar-menu">

<li><Link to="/">Home</Link></li>
 <li><Link to="/about">About Us</Link></li>
 <li><Link to="/Services">Services</Link></li>
 <li><Link to="/Projects">Projects</Link></li>
 <li><Link to="/Blogs">Blogs</Link></li>
 <li><Link to="/Pages">Pages</Link></li>
 <li><Link to="/Contact">Contact</Link></li>
</ul>



{/* Buttons */}
<div className='menu-btns'>
      <Link to="/Login"> <button className="menu-btn1">Login</button></Link> 
        <button className="menu-btn2" ><Link to="/SignupForm">Signup</Link></button>
      </div>
        </div>
       
        {/* Menu items */}
        <div className="nav-ele">
        <ul className="navbar-menu">

         <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Blogs">Blogs</Link></li>
          <li><Link to="/Pages">Pages</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>

        {/* Buttons */}
        <div className="menu-btns">
          <button className="menu-btn1"><Link to="/LoginForm">Login</Link></button>
          <button className="menu-btn2"><Link to="/SignupForm">Signup</Link></button>
        </div></div>
      </div>
      </>
    
  );
}

export default Navbar;
