import React from "react";
import "../styles/Navbar.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo">Foodieland</div>

      {/* Middle: Links */}
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About Us</a></li>
      </ul>

      {/* Right: Social Icons */}
      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaXTwitter /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;
